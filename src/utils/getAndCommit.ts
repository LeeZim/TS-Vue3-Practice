import { Commit } from 'vuex'
import axios from './axios'
import { DataProps } from '../store'

const getAndCommit = async (mutitionName: string, apiUrl: string, commit: Commit) => {
  const { data } = await axios.get<{ data: DataProps }>(apiUrl)
  commit(mutitionName, data.data)
  return data
}

export default getAndCommit
