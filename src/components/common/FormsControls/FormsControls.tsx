import React from 'react';
import style from './FormsControls.module.css'
import {WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    meta: {
        touched: boolean,
        error : string
    },
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {

    const hasError = touched && error
    return (
        <div className={style.formControl +"" + (hasError ?  style.error : '')}>
            <div>
                 {children}
            </div>
            {hasError && <span> {error}</span>}
        </div>
    )
}



export const TextArea: React.FC<WrappedFieldProps> = (props: any) => {// todo lsn 77 wtf typeof
    const {input, meta, child, ...restProps} = props
    return (
     <FormControl {...props}><textarea {...input } {...restProps}/></FormControl>
    )
}

export const Input: React.FC<FormControlPropsType> = (props: any) => {// todo lsn 77 wtf typeof
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}