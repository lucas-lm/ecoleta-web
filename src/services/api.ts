import axios from 'axios'

const { REACT_APP_API_URL: baseURL, REACT_APP_API_IBGE } = process.env
const api = axios.create({
  baseURL,
})

export const ibge = axios.create({
  baseURL: REACT_APP_API_IBGE,
})

export default api
