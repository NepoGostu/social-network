import React from 'react';
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImage}><img src='https://uploads.ar12gaming.com/articles/cJMmCp53-CV4EXHtUAAA766k.medium.jpg'
                      alt="beautiful world"></img></div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;