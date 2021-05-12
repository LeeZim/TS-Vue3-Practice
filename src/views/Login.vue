<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="/src/assets/loginLogo.png" class="h-120" />
      </div>
      <ValidForm class="h-120 shadow-sm card col-6 py-5 mb-4 d-grid gap-4">
        <ValidInput :rules="mailValidRule" placeholder="请输入邮箱" :label="'邮箱地址：'" />
        <ValidInput
          :rules="pwdValidRule"
          placeholder="请输入密码"
          type="password"
          :label="'密码：'"
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
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import ValidInput, { RuleProps } from '../components/ValidInput.vue'
import ValidForm from '../components/ValidForm.vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore()
    const onFormCommit = () => {
      store.commit('userLogin')
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
      pwdValidRule
    }
  },
  components: {
    ValidInput,
    ValidForm
  }
})
</script>
