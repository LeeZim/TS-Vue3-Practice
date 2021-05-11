import { createStore } from 'vuex'

export interface GlobalStateProps {
  count: number
}

const defaultState: GlobalStateProps = {
  count: 0
}

const store = createStore({
  state() {
    return defaultState
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store
