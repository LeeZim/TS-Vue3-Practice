import { ComputedRef, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalStateProps } from '../store'

export interface paramsProps {
  currentPage: number
  pageSize: number
}

const getMoreData = (actionName: string, count: ComputedRef<number>, params: paramsProps) => {
  const store = useStore<GlobalStateProps>()
  const currentPage = ref(params.currentPage)
  const requestParams = computed(() => ({
    currentPage: currentPage.value,
    pageSize: params.pageSize
  }))
  const useMoreData = () => {
    store.dispatch(actionName, requestParams.value).then(() => {
      currentPage.value += 1
    })
  }
  const pageCount = computed(() => Math.ceil(count.value / params.pageSize))
  const isLastPage = computed(() => {
    return currentPage.value > pageCount.value
  })
  return {
    useMoreData,
    isLastPage
  }
}

export default getMoreData
