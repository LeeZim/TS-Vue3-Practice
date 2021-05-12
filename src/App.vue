<template>
  <div class="container">
    <Header :user="userInfo" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/GlobalHeader.vue'
import Footer from '@/components/GlobalFooter.vue'
import { useStore } from 'vuex'
import { CurrentUserProps } from './store'

export default defineComponent({
  name: 'App',
  components: { Header, Footer },
  setup() {
    const store = useStore()
    const userInfo = ref<CurrentUserProps>(store.state.user)
    return {
      userInfo
    }
  }
})
</script>

<style></style>
