<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/GlobalHeader.vue'
import Footer from '@/components/GlobalFooter.vue'

export default defineComponent({
  name: 'App',
  components: { Header, Footer },
  setup() {}
})
</script>

<style></style>
