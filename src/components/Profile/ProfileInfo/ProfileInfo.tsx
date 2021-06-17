import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';



const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profileImage}><img src='https://uploads.ar12gaming.com/articles/cJMmCp53-CV4EXHtUAAA766k.medium.jpg'
                      alt="beautiful world"></img></div>
            <div className={s.descriptionBlock}>
                {/*<img src={props.profile.photos.large} alt="photo"/>*/}
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;