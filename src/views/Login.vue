<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="/src/assets/loginLogo.png" class="h-120" />
      </div>
      <div class="h-120 shadow-sm card col-6 py-5 mb-4 d-grid gap-4">
        <ValidInput :rules="[{ rule: 'email' }]" placeholder="请输入邮箱" :label="'邮箱地址：'" />
        <ValidInput
          :rules="[{ rule: 'password' }]"
          placeholder="请输入密码"
          type="password"
          :label="'密码：'"
        />
        <button class="btn btn-primary w-50 mx-auto" @click="onFormCommit">登录</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import ValidInput from '../components/ValidInput.vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore()
    const onFormCommit = () => {
      store.commit('userLogin')
    }
    return {
      onFormCommit
    }
  },
  components: {
    ValidInput
  }
})
</script>
