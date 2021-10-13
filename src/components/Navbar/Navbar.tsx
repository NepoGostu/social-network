import React from 'react';
import {NavLink} from 'react-router-dom';
import {MenuItemType} from '../../App';
import s from './Navbar.module.css';

type PropsType = {
    menuItems: Array<MenuItemType>
}

const Navbar = (props: PropsType) => {
    return <nav className={s.nav}>
        {props.menuItems.map((item) => {
            return (
                <div key={item.id} className={s.item}>
                    <NavLink to={item.to} activeClassName={`${s.item} ${s.active}`}>{item.title}</NavLink>
                </div>
            )
        })}
    </nav>
}

export default Navbar;