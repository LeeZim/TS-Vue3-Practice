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
}

const defaultState: GlobalStateProps = {
  user: { isLogin: true, nickName: '某某某某' },
  columns: { pageSize: 3, currentPage: 1, list: [], isEnd: false }
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
    getColumns(state: GlobalStateProps, rawData: ColumnsProps) {
      if (!state.columns.list) {
        state.columns.list = rawData.list
      } else {
        state.columns.list = state.columns.list.concat(rawData.list)
        if (rawData.count && state.columns.list.length >= rawData.count) {
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
      return getAndCommit(
        'getColumns',
        `/columns?currentPage=${state.columns.currentPage}&pageSize=${state.columns.pageSize}`,
        commit
      )
    }
  },
  getters: {}
})

export default store
