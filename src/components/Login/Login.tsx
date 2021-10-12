import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
    email: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'Email'}
                name={'login'}
                component={Input}
                validate={[required]}
            />
        </div>
        <div>
            <Field
                placeholder={'Password'}
                name={'password'}
                type = {'password'}
                component={Input}
                validate={[required]}
            />
        </div>
        <div>
            <Field
                type={'Checkbox'}
                name={'rememberMe'}
                component={Input}

            /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: any) => ({   // todo lsn 78 typeof
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login)