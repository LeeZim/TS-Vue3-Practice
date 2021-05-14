import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import store from './store'
import axios from './utils/axios'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isRedirectLogin: true
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: ColumnDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  const { isRedirectLogin, isRequireLogin } = to.meta
  const { token, user } = store.state
  if (!user.isLogin) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      store
        .dispatch('fetchCurrentUser')
        .then(() => {
          if (isRedirectLogin) {
            next('/')
          } else {
            next()
          }
        })
        .catch(() => {
          store.commit('userLogout')
          if (isRequireLogin) {
            next('/login')
          } else {
            next()
          }
        })
    } else if (isRequireLogin) {
      next('/login')
    } else {
      next()
    }
  } else if (isRedirectLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
