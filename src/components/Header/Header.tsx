import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={styles.header}>
        <div className={styles.logo}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj" alt="logo"/>
            <div className={styles.main}>
                <NavLink to="/profile" className={styles.main}>IN TOUCH</NavLink>
            </div>
        </div>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>{props.login}
                    <button className={styles.buttonLog} onClick={props.logout}>LOG OUT</button>
                </div>
                : <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;