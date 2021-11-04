import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ec076cc7-b25d-434a-bd18-c55823d04226'
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
    },
    savePhoto(photoFile: string) {
        let formData = new FormData()
        formData.append('image', photoFile)

        return instance.put('profile/photo', formData, {
            headers: {'Counter-Type': 'multipart/form-data'}
        })
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`
        )
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}
        )
    },
    logout() {
        return instance.delete(`auth/login`
        )
    }
}


/*export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => {
            return response.data
        })
}*/
