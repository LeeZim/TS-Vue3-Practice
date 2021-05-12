import { createStore } from 'vuex'
import getAndCommit from './utils/getAndCommit'

export interface CurrentUserProps {
  isLogin: boolean
  nickName: string
}

export interface AvatarProps {
  _id: string
  url?: string
  createdAt?: string
}

export interface ColumnsProps {
  _id: string
  title: string
  description?: string
  avatar?: AvatarProps
  author?: string
  createdAt?: string
}

export interface DataProps {
  count: number
  pageSize: number
  currentPage: number
  list: ColumnsProps[]
}

export interface GlobalStateProps {
  user: CurrentUserProps
  columns: ColumnsProps[]
}

const defaultState: GlobalStateProps = {
  user: { isLogin: false, nickName: '某某某' },
  columns: []
}

const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    userLogin(state: GlobalStateProps) {
      state.user.isLogin = true
    },
    userLogout(state: GlobalStateProps) {
      state.user.isLogin = false
    },
    getColumns(state: GlobalStateProps, rawData: DataProps) {
      state.columns = rawData.list
    }
  },
  actions: {
    fetchColumns({ commit }) {
      return getAndCommit('getColumns', '/columns', commit)
    }
  },
  getters: {}
})

export default store
