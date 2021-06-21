import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    // logout: () => void
}

const Header = (props: HeaderPropsType) => {
return  <header className={s.header}>
<img src="https://cdn.worldvectorlogo.com/logos/rockstar-games.svg" alt="beautiful world"></img>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login
         : <NavLink to={'/login'}>Login</NavLink> }
    </div>
</header>;
}

export default Header;