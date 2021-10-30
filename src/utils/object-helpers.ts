import {UserType} from '../redux/users-reducer';

type updateObjectInArrayType = {// todo lsn 90 wtf typeof
    users: UserType[]
    usersId: number
    followed: boolean
}
export const updateObjectInArray = ({users, usersId, followed}: updateObjectInArrayType) => {
  return users.map(u => {
                    if (u.id === usersId) {
                        return {...u, followed: true}
                    }
                    return u
                })
}
