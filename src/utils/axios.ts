import Axios from 'axios'
// import { useStore } from 'vuex'
import store from '../store'

const baseUrl = 'https://apis.imooc.com/api/'

const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 20000
})

axios.interceptors.request.use(
  (config) => {
    store.commit('setLoader', true)
    if (config.method === 'post') {
      if (config.data instanceof FormData) {
        config.data.append('icode', '0370D0ADAC459408')
      } else {
        config.data = { ...config.data, icode: '0370D0ADAC459408' }
      }
    } else {
      config.params = { ...config.params, icode: '0370D0ADAC459408' }
    }
    return config
  },
  (error) => {
    console.log('error')
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (config) => {
    store.commit('setLoader', false)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
