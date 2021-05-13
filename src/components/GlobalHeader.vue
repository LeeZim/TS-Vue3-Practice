<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand">者也专栏</router-link>
    <ul v-if="!userInfo.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a class="btn btn-outline-light" @click="userLogin">登录</a></li>
      <li class="list-inline-item"><a class="btn btn-outline-light">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropdownList :user="user"></DropdownList>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { CurrentUserProps, GlobalStateProps } from '../store'
import DropdownList from './DropdownList.vue'

export default defineComponent({
  name: 'Header',
  props: {
    user: {
      type: Object as PropType<CurrentUserProps>,
      required: true
    }
  },
  components: {
    DropdownList
  },
  setup() {
    const router = useRouter()
    const store = useStore<GlobalStateProps>()
    const userInfo = computed<CurrentUserProps>(() => store.state.user)
    const userLogin = () => {
      router.push('/login')
    }
    return {
      userInfo,
      userLogin
    }
  }
})
</script>
