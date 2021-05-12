<template>
  <div class="col-md-10 mx-auto">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      v-if="tag === 'text'"
      class="form-control"
      :class="validRef.error"
      v-bind="$attrs"
      v-model="validRef.value"
      @blur="loseFocus"
    />
    <textarea
      v-else
      class="form-control"
      :class="validRef.error"
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
  rule: 'required' | 'email' | 'password' | 'custom'
  min?: number
  message?: string
  func?: () => boolean
}

type validErrorProps = { 'is-valid': true } | { 'is-invalid': true } | null

const isValidClass: { [key: string]: validErrorProps } = {
  valid: { 'is-valid': true },
  invalid: { 'is-invalid': true }
}

interface ValidRefProps {
  value: string
  error?: validErrorProps
  errorMsg?: string
}
type TypeTag = 'text' | 'textarea'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
  setup(props) {
    const isValid = ref()
    const msg = ref('参数错误')
    const validRef = reactive<ValidRefProps>({
      value: '',
      error: null,
      errorMsg: '参数错误'
    })
    const loseFocus = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule: RuleProps) => {
          let passed = true
          if (rule.rule) {
            validRef.errorMsg = rule.message
            switch (rule.rule) {
              case 'required':
                passed = validRef.value.trim() !== ''
                break
              case 'email':
                if (validRef.value !== '') {
                  passed = emailReg.test(validRef.value)
                }
                break
              case 'password':
                if (validRef.value !== '') {
                  passed = validRef.value.length >= (rule.min ? rule.min : 6)
                  if (!passed) {
                    validRef.errorMsg = `密码不能少于${rule.min ? rule.min : 6}位`
                  }
                }
                break
              case 'custom':
                passed = rule.func ? rule.func() : true
                break
              default:
                break
            }
          }
          return passed
        })
        validRef.error = allPassed ? isValidClass.valid : isValidClass.invalid
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
