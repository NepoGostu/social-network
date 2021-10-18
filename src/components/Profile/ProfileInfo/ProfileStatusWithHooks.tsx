import React, {ChangeEvent, useState} from 'react';
import {ProfilePropsType} from '../Profile';


/*type PropType = {
    status: string
}

type StateProps = {
    editMode: boolean,
    status: string

}*/

const ProfileStatusWithHooks  = (props: any) => { // todo lsn 84 wtf typeof

    let [editMode, setEditMode] =  useState(false)

        return (
            <div>
                {!editMode &&
                <div>
                    <span >{props.status || '---'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input
                        autoFocus={true}
                    />
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;