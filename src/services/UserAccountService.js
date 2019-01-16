import axios from 'axios'

class UserAccountService {
    static register(data, onSuccess, onError) {
        axios.post('/api/account/register',
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static login(data, onSuccess, onError) {
        axios.post('/api/account/ExternalLogin',
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

}

export default UserAccountService