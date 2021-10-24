import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from '../Profile';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile?.photos.large && <img src={props.profile.photos.large} alt="photo"/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    profile={props.profile}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;