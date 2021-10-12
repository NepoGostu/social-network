import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    // logout: string
    logout: () => void
}

 const logout = () => {

 }

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src="https://cdn.worldvectorlogo.com/logos/rockstar-games.svg" alt="beautiful world"></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;