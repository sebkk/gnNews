import axios from 'axios'

const BASE_URL = 'https://newsapi.org/v2/'

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

const api = axios.create({
	baseURL: BASE_URL,
})

api.defaults.headers.common = {
	'X-API-Key': API_KEY,
}

export default api
