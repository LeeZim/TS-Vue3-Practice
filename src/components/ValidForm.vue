<template>
  <div>
    <slot></slot>
    <div class="mx-auto w-100 text-center mb-3" @click="onFormCommit">
      <slot name="defaultBtn">
        <button class="btn btn-outline-primary w-50 mx-auto">确定提交</button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

export const emitter = mitt()

type funcArrProps = () => boolean

export default defineComponent({
  emits: ['formCommit'],
  setup(props, context) {
    let funcArr: funcArrProps[] = []
    const onFormCommit = () => {
      const isValid = funcArr.map((func) => func()).every((result) => result)
      context.emit('formCommit', isValid)
    }
    const callback = (func: funcArrProps) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      onFormCommit
    }
  }
})
</script>
