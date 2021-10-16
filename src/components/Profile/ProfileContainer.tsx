import React, {ComponentType} from 'react';
import Profile from './Profile';
import {
    addPostAC,
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
    authorizedUserId: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    addPostAC: any,
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps | any

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.id || 13297;

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push ('/login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
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
        status: state.profileData.status,
        authorizedUserId: state.auth.userID,
        isAuth: state.auth.isAuth

    })
;

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        addPostAC,
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


