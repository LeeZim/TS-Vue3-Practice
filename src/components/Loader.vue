<template>
  <div
    class="loading-container d-flex justify-content-center align-items-center h-100 w-100"
    :style="{ backgroundColor: background || '' }"
  >
    <div class="spinner-border text-primary" role="status"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    background: String
  },
  setup() {}
})
</script>

<style lang="stylus" scoped>
.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
</style>
