<template>
  <div>
    <ValidForm @formCommit="forCommit">
      <Uploader
        class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
        style="height: 300px"
        :beforeUploaded="beforeUploaded"
        @fileUploaded="fileUploaded"
      >
        <template #default>
          <h2>点击上传图片,支持JPG格式</h2>
        </template>
        <template #loading>
          <h2>正在上传...</h2>
        </template>
        <template #success="dataProps">
          <img :src="dataProps.uploadedData.data.url" alt="" class="w-100 h-100" />
        </template>
      </Uploader>
      <ValidInput
        :rules="validTitleRules"
        :label="'文章标题：'"
        placeholder="请输入文章标题"
        v-model="titleVal"
      />
      <ValidInput
        :rules="validContentRules"
        :label="'文章正文：'"
        placeholder="请输入文章正文"
        :tag="'textarea'"
        rows="10"
        v-model="contentVal"
      />
      <template #defaultBtn>
        <button class="btn btn-primary mt-3">确认提交</button>
      </template>
    </ValidForm>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ValidForm from '@/components/ValidForm.vue'
import Uploader from '@/components/Uploader.vue'
import { useStore } from 'vuex'
import ValidInput, { RuleProps } from '../components/ValidInput.vue'
import { CurrentUserProps, GlobalStateProps, RawData, ImageProps } from '../store'
import createMessage from '../utils/createMessage'
import axios from '../utils/axios'

export default defineComponent({
  name: 'createPost',
  components: {
    ValidForm,
    ValidInput,
    Uploader
  },
  setup() {
    const store = useStore<GlobalStateProps>()
    const validTitleRules: RuleProps[] = [{ rule: 'required', message: '标题不能为空' }]
    const validContentRules: RuleProps[] = [{ rule: 'required', message: '正文不能为空' }]
    const titleVal = ref('')
    const contentVal = ref('')
    let imageUrl = ''
    const currentUser = computed<CurrentUserProps>(() => store.state.user)
    const forCommit = (isVlalid: Boolean) => {
      if (isVlalid) {
        const payload = {
          title: titleVal.value,
          content: contentVal.value,
          column: currentUser.value.column,
          image: imageUrl,
          author: currentUser.value._id
        }
        axios.post('/posts', payload).then((resp) => {
          console.log(resp)
        })
      }
    }
    const beforeUploaded = (file: File) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('图片必须为JPG格式', 'error')
      }
      return isJPG
    }

    const fileUploaded = (rawData: RawData<ImageProps>) => {
      const { url } = rawData.data
      if (url) {
        imageUrl = url
      }
      createMessage(`图片：${rawData.data._id}上传成功`, 'success')
    }
    return {
      beforeUploaded,
      fileUploaded,
      validTitleRules,
      validContentRules,
      forCommit,
      titleVal,
      contentVal,
      currentUser
    }
  }
})
</script>
