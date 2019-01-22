import axios from 'axios'

class ProfileService {
    static createProfile(data, onSuccess, onError) {
        axios.post('api/person', data, { withCredentials: true})
            .then(onSuccess)
            .catch(onError)
    }

    static getAllProfile(onSuccess, onError) {
        axios.get('api/person',{ withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static getByIdProfile(id, onSuccess, onError) {
        axios.get(`api/person/${id}`, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

    static updateProfile(id, onSuccess, onError, data) {
        axios.put(`api/person/${id}`, data, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

    static deleteProfile(id, onSuccess, onError) {
        axios.delete(`api/person/${id}`, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

}

export default ProfileService