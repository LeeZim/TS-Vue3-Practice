import Axios from 'axios'

const baseUrl = 'http://api.vikingship.xyz/api/'

const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 20000
})

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.resolve(error)
  }
)

axios.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.resolve(error)
  }
)
