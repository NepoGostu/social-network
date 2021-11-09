import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../outside/profile-reducer";
import Downloader from "../../Common/Preloader/Downloader";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    let contacts: Array<any> = []
    props.profile && Object.entries(props.profile.contacts).forEach(([key, value]) => contacts.push(<div
        key={key}>{value !== null && value !== "" ? `${key}: ${value}` : ``}</div>))

    if (!props.profile?.fullName) {
        return <Downloader/>
    }

    return (
            <div className={styles.profileInfoWrapper}>
                <img className={styles.profilephoto}
                     src="https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj" alt="user"/>
                <div className={styles.profileInfoDescription}>
                    <div
                        className={styles.profileInfoName}>Hello world
                    </div>
                    <ProfileStatusWithHooks status={props.status}
                                            updateUserStatus={props.updateUserStatus}/>
                    <div className={styles.myyogaclasses}>
                        <div className={styles.title}>
                            Looking for a job: {"yes"}
                        </div>
                        <div>
                            {props.profile.lookingForAJobDescription}
                        </div>
                    </div>
                    <div className={styles.title}>About me {props.profile.aboutMe}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div className={styles.title}>My contacts{/*: {Object.keys(props.profile.contacts)}*/}</div>
                    <div className={styles.profileInfoContacts}>{contacts}</div>
                </div>
                </div>
    )
}

export default ProfileInfo;