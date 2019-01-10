import axios from 'axios'

class UserService {
    static register(data, onSuccess, onError) {
        axios.post('http://sabiobootcampapi.azurewebsites.net/api/users/register',
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static login(data, onSuccess, onError) {
        axios.post('http://sabiobootcampapi.azurewebsites.net/api/users/login',
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static getCurrentUser(onSuccess, onError) {
        axios.get('http://sabiobootcampapi.azurewebsites.net/api/tests/auth/current',
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static logoutUser(onSuccess, onError) {
        axios.get('http://sabiobootcampapi.azurewebsites.net/api/users/logout',
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

}



export default UserService