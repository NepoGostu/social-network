import React from 'react';
import {ProfilePropsType} from '../Profile';

export interface ProfileStatusPropsType extends  ProfilePropsType{
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:any) => {// todo lsn 73 wtf typeof
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{!this.props.status || '---' }</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input   autoFocus={true} onBlur={this.deactivatedEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;