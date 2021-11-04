import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store';
import {useFormik} from "formik";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@material-ui/core";


type FormDataType = {
    password: string,
    rememberMe: boolean,
    email: string,
}
//
// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (handleSubmit: any, error) => {
//
//     console.log(error)
//
//     return (
//         <form onSubmit={handleSubmit}>
//             {createField('Email', 'email', [required], Input)}
//             {createField('Password', 'password', [required], Input, {type: 'password'})}
//             {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
//
//             {error && <div className={style.formSummaryError}>
//
//             </div>
//             }
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type ErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}

const Login = (props: MdtpType & MstpType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values) => {
            props.login(values.email, values.password, values.rememberMe)
            formik.resetForm();
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Password must be at least 3 characters';
            }


            return errors;
        }
    });

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }




    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            type='email'
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email && formik.errors.email
                                ? <div style={{color: "red"}}>{formik.errors.email}</div> : null
                        }
                        <TextField
                            label="Password"
                            margin="normal"
                            type="password"
                            {...formik.getFieldProps('password')}
                        />
                        {
                            formik.touched.password && formik.errors.password
                                ? <div style={{color: "red"}}>{formik.errors.password}</div> : null
                        }
                        <FormControlLabel
                            label='Remember me'
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}/>}
                        />
                        {/*{captchaUrl && <img src={captchaUrl}/>}*/}
                        {/*{*/}
                        {/*    captchaUrl && <TextField*/}
                        {/*        label="Please inter the symbols"*/}
                        {/*        margin="normal"*/}
                        {/*        type="text"*/}
                        {/*        {...formik.getFieldProps('Please inter the symbols')}*/}
                        {/*    />*/}
                        {/*}*/}
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
    //
    // const onSubmit = (formData: FormDataType) => {
    //     console.log()
    //     login(formData.email, formData.password, formData.rememberMe)
    // }
    // console.log(props.isAuth)
    // if (props.isAuth) {
    //     console.log( props.isAuth)
    //     return <Redirect to = {'/profile'}/>
    // }

    // return <div>
    //     <h1>LOGIN</h1>
    //     {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
    // </div>
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