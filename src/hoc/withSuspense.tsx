import React from 'react';
import Preloader from '../components/common/Preloader/Preloader';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import ProfileContainer from '../components/Profile/ProfileContainer';
import UsersContainer from '../components/Users/UsersContainer';


export function withSuspenseForDialogsContainer(title: string) {

       return <React.Suspense fallback={<Preloader/>}>
           {title === 'DialogsContainer' && <DialogsContainer/>}
        </React.Suspense>
}

export function withSuspenseForProfileContainer(title: string) {

    return <React.Suspense fallback={<Preloader/>}>
        {title === 'ProfileContainer' && <ProfileContainer/>}
    </React.Suspense>
}

export function withSuspenseForUsersContainer(title: string) {

    return <React.Suspense fallback={<Preloader/>}>
        {title === 'UsersContainer' && <UsersContainer/>}
    </React.Suspense>
}
