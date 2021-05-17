<template>
  <div class="container">
    <Header :user="userInfo" />
    <Loader v-if="isLoading" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/GlobalHeader.vue'
import Footer from '@/components/GlobalFooter.vue'
import { useStore } from 'vuex'
import Loader from '@/components/Loader.vue'
import { CurrentUserProps, GlobalStateProps } from './store'
import { beforeUploaded, fileUploaded } from './utils/uploader'

export default defineComponent({
  name: 'App',
  components: { Header, Footer, Loader },
  setup() {
    const store = useStore<GlobalStateProps>()
    const userInfo = computed<CurrentUserProps>(() => store.state.user)
    const isLoading = computed(() => store.state.isLoading)
    return {
      userInfo,
      isLoading,
      beforeUploaded,
      fileUploaded
    }
  }
})
</script>

<style></style>
