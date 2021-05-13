<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="/src/assets/loginLogo.png" class="h-120" />
      </div>
      <ValidForm
        class="h-120 shadow-sm card col-6 py-5 mb-4 d-grid gap-4"
        @formCommit="onFormCommit"
      >
        <ValidInput
          :rules="mailValidRule"
          placeholder="请输入邮箱"
          :label="'邮箱地址：'"
          v-model="emailVal"
        />
        <ValidInput
          :rules="pwdValidRule"
          placeholder="请输入密码"
          type="password"
          :label="'密码：'"
          v-model="pwdVal"
        />
        <template #defaultBtn>
          <!-- <button class="btn btn-primary w-50 mx-auto" style="height: 40px" @click="onFormCommit">
            登录
          </button> -->
        </template>
      </ValidForm>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidInput, { RuleProps } from '../components/ValidInput.vue'
import ValidForm from '../components/ValidForm.vue'
import createMessage from '../utils/createMessage'

interface LoginPayload {
  method: 'get' | 'post'
  data: {
    email: string
    password: string
  }
}
export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const store = useStore()
    const emailVal = ref<string>('')
    const pwdVal = ref<string>('')
    const onFormCommit = (isValid: boolean) => {
      if (isValid) {
        const payload: LoginPayload = {
          method: 'post',
          data: {
            email: emailVal.value,
            password: pwdVal.value
          }
        }
        store
          .dispatch('loginAndFetch', payload)
          .then(() => {
            createMessage('登陆成功', 'success')
            setTimeout(() => {
              router.push('/')
            }, 2500)
          })
          .catch((error) => {
            const errorMsg = error.response.data.error
            createMessage(errorMsg, 'error')
          })
      }
    }
    const mailValidRule: RuleProps[] = [
      { rule: 'email', message: '请输入有效的邮箱地址' },
      { rule: 'required', message: '邮箱地址不能为空' }
    ]
    const pwdValidRule: RuleProps[] = [
      { rule: 'password', min: 6 },
      { rule: 'required', message: '密码不能为空' }
    ]
    return {
      onFormCommit,
      mailValidRule,
      pwdValidRule,
      emailVal,
      pwdVal
    }
  },
  components: {
    ValidInput,
    ValidForm
  }
})
</script>
