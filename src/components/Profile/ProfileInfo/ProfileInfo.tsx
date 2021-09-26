import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import {ProfilePropsType} from '../Profile';


const ProfileInfo = (props: ProfilePropsType) => {
    console.log("test")
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile?.photos.large && <img src={props.profile.photos.large} alt="photo"/>}
                <ProfileStatus
                    status={'hello my friends'}
                    profile={props.profile}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;