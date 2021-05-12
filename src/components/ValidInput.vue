<template>
  <div class="col-md-10 mx-auto">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :class="{
        ' is-invalid': isValid && isValid === 'false',
        ' is-valid': isValid && isValid === 'true'
      }"
      v-bind="$attrs"
      v-model="validRef.value"
      @blur="loseFocus"
    />
    <div class="invalid-feedback">{{ validRef.errorMsg }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, ref } from 'vue'

export interface RuleProps {
  rule: 'email' | 'password' | 'custom'
  message?: string
  func?: () => boolean
}
type TypeTag = 'text' | 'textarea'
// const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  props: {
    rules: Array as PropType<RuleProps[]>,
    tag: {
      type: String as PropType<TypeTag>,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  setup() {
    const isValid = ref()
    const msg = ref('参数错误')
    const validRef = reactive({
      value: '',
      error: false,
      errorMsg: ''
    })
    const loseFocus = () => {
      if (validRef.value) {
        isValid.value = 'true'
      } else {
        isValid.value = 'false'
        validRef.errorMsg = '邮箱不能为空'
      }
    }
    return {
      isValid,
      msg,
      validRef,
      loseFocus
    }
  }
})
</script>
