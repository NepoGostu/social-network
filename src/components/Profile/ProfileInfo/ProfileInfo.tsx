import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from '../Profile';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}: ProfilePropsType) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                {profile?.photos.large && <img src={profile.photos.large} alt="photo"/>}
                <ProfileStatusWithHooks
                    status={status}
                    profile={profile}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;