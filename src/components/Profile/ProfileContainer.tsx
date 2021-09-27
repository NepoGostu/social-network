import React, {ComponentType} from 'react';
import Profile from './Profile';
import {
    addPostAC,
    changeNewTextAC,
    getStatus,
    getUserProfile,
    ProfileType,
    updateStatus
} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    addPostAC: () => void,
    changeNewTextAC: (newText: string) => void,
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps | any

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount () {
        let userId = this.props.match.params.id || 13297;

        if (!userId) {
            userId = 2
        }

        this.props.getUserProfile (userId);
        this.props.getStatus (userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        profile: state.profileData.profile,
        status: state.profileData.status
    })
;

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        addPostAC,
        changeNewTextAC,
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


