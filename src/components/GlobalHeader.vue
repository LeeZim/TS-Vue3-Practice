<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-brand">者也专栏</router-link>
    <ul v-if="!userInfo.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a class="btn btn-outline-light" @click="userLogin">登录</a></li>
      <li class="list-inline-item"><a class="btn btn-outline-light">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropdownList :user="user">
          <DropdownItem>新建文章</DropdownItem>
          <DropdownItem :disabled="true">我的专栏</DropdownItem>
          <DropdownItem @click.prevent="userLogout">退出登录</DropdownItem>
        </DropdownList>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Computed, useStore } from 'vuex'
import { CurrentUserProps, GlobalStateProps } from '../store'
import DropdownList from './DropdownList.vue'
import DropdownItem from './DropdownItem.vue'

export default defineComponent({
  name: 'Header',
  props: {
    user: {
      type: Object as PropType<Computed>,
      required: true
    }
  },
  components: {
    DropdownList,
    DropdownItem
  },
  setup() {
    const router = useRouter()
    const store = useStore<GlobalStateProps>()
    const userInfo = computed<CurrentUserProps>(() => store.state.user)
    const userLogin = () => {
      router.push('/login')
    }
    const userLogout = () => {
      store.commit('userLogout')
      router.push('/')
    }
    return {
      userInfo,
      userLogin,
      userLogout
    }
  }
})
</script>
