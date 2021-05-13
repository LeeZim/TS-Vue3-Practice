<template>
  <teleport to="#loading">
    <div
      class="loading-container d-flex justify-content-center align-items-center h-100 w-100"
      :style="{ backgroundColor: background || '' }"
    >
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  props: {
    background: String
  },
  setup() {
    const div = document.createElement('div')
    div.id = 'loading'
    document.body.appendChild(div)

    onUnmounted(() => {
      document.body.removeChild(div)
    })
  }
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
