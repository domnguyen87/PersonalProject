import axios from 'axios'

class CareerService {
    static createCareer(data, onSuccess, onError) {
        axios.post('api/career', data, { withCredentials: true})
            .then(onSuccess)
            .catch(onError)
    }

    static getAllCareer(onSuccess, onError) {
        axios.get('api/career',{ withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static getByIdCareer(id, onSuccess, onError) {
        axios.get(`api/career/${id}`, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

    static updateCareer(id, onSuccess, onError, data) {
        axios.put(`api/career/${id}`, data, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

    static deleteCareer(id, onSuccess, onError) {
        axios.delete(`api/career/${id}`, { withCredentials:true })
            .then(onSuccess)
            .catch(onError)
    }

}

export default CareerService