<template>
  <li class="dropdown-option">
    <a class="dropdown-item" :class="{ disabled: disabled }" href="#"><slot></slot></a>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {}
})
</script>

<style lang="stylus" scoped></style>
