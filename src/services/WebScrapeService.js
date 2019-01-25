import axios from 'axios'

class WebScrapeService {
    static create(data, onSuccess, onError) {
        axios.post('/api/webscrape',
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static selectAll(onSuccess, onError) {
        axios.get('/api/webscrape',
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static selectById(id, onSuccess, onError) {
        axios.get(`/api/webscrape/${id}`,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static update(data, onSuccess, onError) {
        axios.put(`/api/webscrape/${data.id}`,
            data,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static delete(id, onSuccess, onError) {
        axios.delete(`/api/webscrape/${id}`,
            { withCredentials: true }
        )
            .then(onSuccess)
            .catch(onError)
    }
}

export default WebScrapeService