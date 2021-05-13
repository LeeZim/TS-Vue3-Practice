import { Commit } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import axios from './axios'

const asyncAndCommit = async (
  mutationName: string,
  url: string,
  commit: Commit,
  config: AxiosRequestConfig = { method: 'get' },
  extraData?: any
) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, data)
  }
  return data
}

export default asyncAndCommit
