<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand">者也专栏</router-link>
    <ul v-if="!userInfo.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a class="btn btn-outline-light" @click="userLogin">登录</a></li>
      <li class="list-inline-item"><a class="btn btn-outline-light">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-light" @click="userLogout">欢迎 {{ user.nickName }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { useStore } from 'vuex'
import { CurrentUserProps } from '../store'

export default defineComponent({
  name: 'Header',
  props: {
    user: {
      type: Object as PropType<CurrentUserProps>,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const userInfo = ref<CurrentUserProps>(props.user)
    const userLogin = () => {
      store.commit('userLogin')
      console.log(`login${userInfo.value.isLogin}`)
    }
    const userLogout = () => {
      store.commit('userLogout')
    }
    return {
      userInfo,
      userLogin,
      userLogout
    }
  }
})
</script>
