import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfilePropsType} from '../Profile';
import {ProfileType} from '../../../redux/profile-reducer';

export type ProfileStatusWithHooksPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: any) => { // todo lsn 84 wtf typeof

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus({
            status: e.currentTarget.value
        })
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onBlur={deactivatedEditMode}
                    onChange={onStatusChange}
                    value = {status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;