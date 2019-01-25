import axios from 'axios'

class FileStorageService {
    static create(data, onSuccess, onError) {
        axios.post('/api/file-storage/', data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static uploadImageUrl(url, onSuccess, onError) {
        axios.post('/api/file-storage/image-url?url=' + url, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectall(onSuccess, onError) {
        axios.get('/api/file-storage', { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectbyid(id, onSuccess, onError) {
        axios.get('/api/file-storage/' + id, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static delete(id, onSuccess, onError) {
        axios.delete('/api/file-storage/' + id, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
}

export default FileStorageService