import { Commit } from 'vuex'
import axios from './axios'
import { ColumnsProps } from '../store'

const getAndCommit = async (mutitionName: string, apiUrl: string, commit: Commit) => {
  const { data } = await axios.get<{ data: ColumnsProps }>(apiUrl)
  commit(mutitionName, data.data)
  return data
}

export default getAndCommit
