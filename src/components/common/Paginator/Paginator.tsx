import React from 'react';
import styles from './Paginator.module.css';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}


// let Paginator = (pageSize: number, totalUsersCount: number, currentPage: number, onPageChanged: (pageNumber: number) => void) => {//
let Paginator = (props: PropsType) => {// todo lsn 90 wtf typeof

    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;