import { Ref, ref, onMounted, onUnmounted } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(true)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      const target = e.target as HTMLElement
      isClickOutside.value = !elementRef.value.contains(target)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}

export default useClickOutside
