import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {addPostAC, changeNewTextAC, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter } from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    addPostAC: () => void,
    changeNewTextAC: (newText: string) => void,
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
           <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileData.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile, addPostAC, changeNewTextAC})(WithUrlDataContainerComponent);