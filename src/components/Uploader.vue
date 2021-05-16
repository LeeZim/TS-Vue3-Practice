<template>
  <div>
    <button class="btn btn-primary" @click="fileInput.click">
      <span v-if="uploadStatus === 'ready'">点击上传</span>
      <span v-else-if="uploadStatus === 'loading'">正在上传...</span>
      <span v-else-if="uploadStatus === 'error'">上传失败</span>
      <span v-else>上传成功</span>
    </button>
    <input
      type="file"
      @change.prevent="handlerFileChange"
      class="file-input d-none"
      ref="fileInput"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import axios from '../utils/axios'

type StatusType = 'ready' | 'success' | 'error' | 'loading'
// eslint-disable-next-line no-unused-vars
type BeforeUploaded = (file: File) => boolean
export default defineComponent({
  props: {
    beforeUploaded: {
      type: Function as PropType<BeforeUploaded>,
      required: true
    },
    fileUploaded: {
      type: Function,
      required: true
    }
  },
  emits: ['fileUploaded'],
  setup(props) {
    const fileInput = ref<HTMLInputElement | null>(null)
    const uploadStatus = ref<StatusType>('ready')
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
            uploadStatus.value = 'success'
            // context.emit('fileUploaded', resp.data)
            props.fileUploaded(resp.data)
            console.log(resp)
          })
          .catch(() => {
            uploadStatus.value = 'error'
          })
          .finally(() => {
            setTimeout(() => {
              uploadStatus.value = 'ready'
              if (fileInput.value) {
                fileInput.value.value = ''
              }
              console.log(uploadStatus.value)
            }, 1000)
          })
      }
    }
    return {
      handlerFileChange,
      fileInput,
      uploadStatus
    }
  }
})
</script>
