import React from 'react';
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImage}><img src='https://i1.wallbox.ru/wallpapers/main/201128/trava-siniy-minimalizm-9068735.jpg'
                      alt="beautiful world"></img></div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;