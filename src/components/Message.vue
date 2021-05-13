<template>
  <div
    class="alert w-25 position-absolute top-50 start-50 translate-middle"
    :class="`alert-${type}`"
  >
    <strong class="mx-auto">{{ message }}</strong>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MessageType } from '../utils/createMessage'

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  setup() {}
})
</script>

<style lang="stylus" scoped>
div {
  text-align:center;
  position :fixed;
}
</style>
