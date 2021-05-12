<template>
  <div>
    <slot></slot>
    <slot name="defaultBtn">
      <button
        class="btn btn-outline-primary w-50 mx-auto"
        style="height: 40px"
        @click="onFormCommit"
      >
        确定提交
      </button>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onFormCommit = () => {
      console.log('commit')
    }
    return {
      onFormCommit
    }
  }
})
</script>
