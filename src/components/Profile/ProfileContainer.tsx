import React from 'react';
import Profile from './Profile';
import {addPostAC, changeNewTextAC, getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStatePropsType = {
    profile: ProfileType | null
    // isAuth: boolean
}

type MapDispatchPropsType = {
    addPostAC: () => void,
    changeNewTextAC: (newText: string) => void,
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps

class ProfileContainer extends React.Component<ProfilePropsType> {

    /*componentDidMount() {
        // let userId = this.props.match.params.userId ? this.props.match.params.userId : '13297'
        let userId = 13297
        this.props.getUserProfile(userId)
        /!*  usersAPI.getProfile(userId).then(response => {
              this.props.setUserProfile(response.data)
          })*!/
    }*/
    render() {
        console.log('params', this.props.match)
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileData.profile,
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps, {
    addPostAC,
    changeNewTextAC,
    getUserProfile
})
(AuthRedirectComponent));