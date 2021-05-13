<template>
  <div
    class="alert w-50 position-absolute top-50 start-50 translate-middle"
    :class="alertType[type]"
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
  setup() {
    const alertType: { [key: string]: string } = {
      success: 'alert-success',
      error: 'alert-danger',
      default: 'alert-info'
    }
    return {
      alertType
    }
  }
})
</script>

<style lang="stylus" scoped>
div {
  text-align:center;
  position :fixed;
}
</style>
