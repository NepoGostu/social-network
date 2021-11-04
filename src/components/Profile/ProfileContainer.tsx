import React, {ComponentType} from 'react';
import Profile from './Profile';
import {
    addPostAC,
    getStatus,
    getUserProfile,
    ProfileType, savePhoto,
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

type MapDispatchPropsType = {// todo wtf typeof?
    addPostAC: any,
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
    savePhoto: any
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps | any

class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.id || 13297;

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
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
        updateStatus,
        savePhoto
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


