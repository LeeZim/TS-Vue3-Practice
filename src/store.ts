import { createStore } from 'vuex'
import { AxiosRequestConfig } from 'axios'
import asyncAndCommit from './utils/asyncAndCommit'
import axios from './utils/axios'

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

export interface ColumnsProps {
  count?: number
  pageSize: number
  currentPage: number
  list: ColumnProps[]
  isEnd: boolean
}

export interface GlobalStateProps {
  user: CurrentUserProps
  columns: ColumnsProps
  token: string | null
}

const defaultState: GlobalStateProps = {
  user: { isLogin: false, nickName: '某某某某', _id: '' },
  columns: { pageSize: 3, currentPage: 1, list: [], isEnd: false },
  token: ''
}

const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    userLogin(state: GlobalStateProps, rawData) {
      const { token } = rawData.data
      console.log(token)
      if (token) {
        localStorage.setItem('token', token)
        state.token = localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    },
    fetchCurrentUser(state: GlobalStateProps, rawData) {
      const { data } = rawData
      if (data) {
        state.user = { ...data, isLogin: true }
      }
    },
    userLogout(state: GlobalStateProps) {
      state.user.isLogin = false
    },
    getColumns(state: GlobalStateProps, rawData) {
      const { data } = rawData
      if (!state.columns.list) {
        state.columns.list = data.list
      } else {
        state.columns.list = state.columns.list.concat(data.list)
        if (data.count && state.columns.list.length >= data.count) {
          state.columns.isEnd = true
        }
      }
    },
    getMoreColumns(state: GlobalStateProps) {
      state.columns.currentPage += 1
    }
  },
  actions: {
    fetchColumns({ state, commit }) {
      return asyncAndCommit(
        'getColumns',
        `/columns?currentPage=${state.columns.currentPage}&pageSize=${state.columns.pageSize}`,
        commit
      )
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
  getters: {}
})

export default store
