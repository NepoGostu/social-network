import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextArea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   name="newMessageBody"
                   placeholder="Enter your message"
                   validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)