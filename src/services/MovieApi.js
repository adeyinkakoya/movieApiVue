import axios from 'axios'

export default {

    fetchMovieCollection(term) {
        return axios.get('&s=' + term)
            .then(response => {
                return response.data
            })
    },

    fetchSingleMovie(id) {
        return axios.get('&i=' + id)
            .then(response => {
                return response.data
            })
    }
}