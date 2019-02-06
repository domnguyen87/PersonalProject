import axios from 'axios'

class LogService {
    static selectAll(onSuccess, onError) {
        axios.get('api/AspNetUsers', { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectByPageNumber(pageNumber, pageSize, onSuccess, onError) {
        axios.get(`api/AspNetUsers/${pageNumber}/${pageSize}`, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static search(data, onSuccess, onError){
        axios.post('api/AspNetUsers/search', data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
}

export default LogService