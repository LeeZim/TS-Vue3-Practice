<template>
  <div>
    <div class="file-upload-container" @click="fileInput.click" v-bind="$attrs">
      <slot v-if="uploadStatus === 'ready'" name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
      <slot v-else-if="uploadStatus === 'loading'" name="loading">
        <button class="btn btn-primary">正在上传...</button>
      </slot>
      <slot v-else-if="uploadStatus === 'success'" name="success" :uploadedData="uploadedData">
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <input
        type="file"
        @change.prevent="handlerFileChange"
        class="file-input d-none"
        ref="fileInput"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import axios from '../utils/axios'

type StatusType = 'ready' | 'success' | 'error' | 'loading'
// eslint-disable-next-line no-unused-vars
type BeforeUploaded = (file: File) => boolean
export default defineComponent({
  props: {
    beforeUploaded: {
      type: Function as PropType<BeforeUploaded>,
      required: true
    }
  },
  inheritAttrs: true,
  emits: ['fileUploaded'],
  setup(props, context) {
    const fileInput = ref<HTMLInputElement | null>(null)
    const uploadStatus = ref<StatusType>('ready')
    const uploadedData = ref()
    watch(
      () => uploadedData.value,
      (newValue) => {
        console.log(uploadedData)
        if (newValue) {
          uploadStatus.value = 'success'
        }
      }
    )
    const handlerFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const { files } = target
      if (files) {
        const file = files[0]
        if (!props.beforeUploaded(file)) {
          return
        }
        const formData = new FormData()
        formData.append(file.name, file)
        uploadStatus.value = 'loading'
        axios
          .post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((resp) => {
            context.emit('fileUploaded', resp.data)
            uploadedData.value = resp.data
          })
          .catch(() => {
            uploadStatus.value = 'error'
          })
          .finally(() => {
            if (fileInput.value?.value) {
              fileInput.value.value = ''
            }
          })
      }
    }
    return {
      handlerFileChange,
      fileInput,
      uploadStatus,
      uploadedData
    }
  }
})
</script>
