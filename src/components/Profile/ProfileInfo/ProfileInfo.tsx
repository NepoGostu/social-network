import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from '../Profile';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assest/image/user.jpg'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfilePropsType) => {

    if(!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:any) => {// todo wtf typeof
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                {/*{profile?.photos.large && <img src={profile.photos.large} alt="photo"/>}*/}
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type = {'file'} onChange={onMainPhotoSelected}/>}
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