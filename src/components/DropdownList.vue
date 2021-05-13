<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="btn btn-outline-light dropdown-toggle" @click.prevent="openTrigger">
      欢迎 {{ user.nickName }}
    </button>
  </div>
  <ul class="dropdown-menu" style="display: block" v-if="isOpen">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { CurrentUserProps } from '../store'
import useClickOutside from '../utils/useClickOutside'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<CurrentUserProps>,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)

    const isClickOutside = useClickOutside(dropdownRef)
    // IF OUTSIDE IS true
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    const openTrigger = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      dropdownRef,
      openTrigger
    }
  }
})
</script>
