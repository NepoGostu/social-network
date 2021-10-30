import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store';

type FormDataType = {
    password: string,
    rememberMe: boolean,
    email: string,
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (handleSubmit: any, error) => {
    return <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null,'rememberMe',  [required], Input, {type: 'checkbox'}, 'remember me')}
        <div>
            props.error && <div className={style.formSummaryError}/>
            {error}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (isAuth:boolean, login: (email: string, password: string, rememberMe: boolean) => void) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to = {'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type MstpType = {
    isAuth: boolean
}

type MdtpType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}


const mapStateToProps = (state: AppStateType): MstpType => ({
    isAuth: state.auth.isAuth
})

export default connect<MstpType, MdtpType, any, AppStateType>(mapStateToProps, {login})(Login)