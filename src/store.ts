import { createStore } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import asyncAndCommit from './utils/asyncAndCommit'
import axios from './utils/axios'
import { objToArr, arrToObj } from './helper'
import { paramsProps } from './utils/getMoreData'

export interface CurrentUserProps {
  _id: string
  email?: string
  nickName: string
  description?: string
  avatar?: string
  column?: string
  createdAt?: string
  isLogin: boolean
}

export interface AvatarProps {
  _id: string
  url?: string
  createdAt?: string
}

export interface ColumnProps {
  _id: string
  title: string
  description?: string
  avatar?: AvatarProps
  author?: string
  createdAt?: string
}

export interface PostAuthorProps {
  _id: string
  email?: string
  nickName?: string
  description?: string
  avatar?: string
  column?: string
  createdAt?: string
}
export interface PostProps {
  _id: string
  title?: string
  excerpt?: string
  content?: string
  image?: AvatarProps
  author?: PostAuthorProps
}

export interface DataProps<T> {
  count: number
  pageSize?: number
  currentPage: number
  list: T
}

export interface ListProps<P> {
  [key: string]: P
}

export interface RawData<U> {
  code: number
  msg: string
  data: U
}

export interface GlobalStateProps {
  user: CurrentUserProps
  columns: DataProps<ListProps<ColumnProps>>
  posts: DataProps<ListProps<PostProps>>
  token: string
  isLoading: boolean
}

const defaultState: GlobalStateProps = {
  user: { isLogin: false, nickName: '某某某某', _id: '' },
  columns: { count: 0, currentPage: 0, list: {} },
  posts: { count: 0, pageSize: 5, currentPage: 1, list: {} },
  token: localStorage.getItem('token') || '',
  isLoading: false
}

const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    userLogin(state: GlobalStateProps, rawData) {
      const { token } = rawData.data
      if (token) {
        localStorage.setItem('token', token)
        state.token = localStorage.getItem('token') as string
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    },
    userLogout(state: GlobalStateProps) {
      delete axios.defaults.headers.common.Authorization
      localStorage.removeItem('token')
      state.token = ''
      state.user.isLogin = false
    },
    fetchCurrentUser(state: GlobalStateProps, rawData) {
      const { data } = rawData
      if (data) {
        state.user = { ...data, isLogin: true }
      }
    },
    fetchColumns(state: GlobalStateProps, rawData: RawData<DataProps<ColumnProps[]>>) {
      const { data } = rawData
      const list = { ...state.columns.list, ...arrToObj(data.list) }
      state.columns = { ...data, list }
    },
    fetchColumn(state: GlobalStateProps, rawData: RawData<ColumnProps>) {
      const { data } = rawData
      const list: ListProps<ColumnProps> = {}
      list[data._id] = data
      state.columns.list = { ...state.columns.list, ...list }
    },
    setLoader(state: GlobalStateProps, status: boolean) {
      state.isLoading = status
    }
  },
  actions: {
    fetchColumns({ state, commit }, params: paramsProps = { currentPage: 1, pageSize: 3 }) {
      const { currentPage, pageSize } = params
      if (state.columns.currentPage < currentPage) {
        return asyncAndCommit(
          'fetchColumns',
          `/columns?currentPage=${currentPage}&pageSize=${pageSize}`,
          commit
        )
      }
      return Promise.resolve()
    },
    fetchColumn({ state, commit }, cid: string) {
      if (!state.columns.list[cid]) {
        return asyncAndCommit('fetchColumn', `/columns/${cid}`, commit)
      }
      return Promise.resolve()
    },
    login({ commit }, payload: AxiosRequestConfig) {
      return asyncAndCommit('userLogin', '/user/login', commit, payload)
    },
    fetchCurrentUser({ commit }) {
      return asyncAndCommit('fetchCurrentUser', '/user/current', commit)
    },
    loginAndFetch({ dispatch }, payload: AxiosRequestConfig) {
      return dispatch('login', payload).then(() => {
        return dispatch('fetchCurrentUser')
      })
    }
  },
  getters: {
    getColumns: (state: GlobalStateProps) => () => {
      return objToArr(state.columns.list)
    },
    getColumnById: (state: GlobalStateProps) => (cid: string) => {
      return state.columns.list[cid]
    }
  }
})

export default store
