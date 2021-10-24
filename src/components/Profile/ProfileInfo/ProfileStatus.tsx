import React, {ChangeEvent} from 'react';
import {ProfilePropsType} from '../Profile';


type PropType = {
    status: string
}

type StateProps = {
    editMode: boolean,
    status: string
}

export interface ProfileStatusPropsType extends ProfilePropsType {
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
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: PropType, prevState: StateProps) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={this.deactivatedEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;