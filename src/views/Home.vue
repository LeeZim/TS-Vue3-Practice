<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="@/assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <ColumnList />
    <div class="d-grid col-6 mx-auto">
      <button
        v-if="!isLastPage"
        class="btn btn-outline-primary mt-2 mb-5 mx-auto w-25"
        @click="useMoreData"
      >
        点击加载更多
      </button>
      <span v-else class="mx-auto w-25 text-center" style="color: gray">到底啦</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalStateProps } from '../store'
import getMoreData from '../utils/getMoreData'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore<GlobalStateProps>()
    const count = computed<number>(() => store.state.columns.count)
    const currentPage = computed(() => store.state.columns.currentPage)
    const { isLastPage, useMoreData } = getMoreData('fetchColumns', count, {
      currentPage: currentPage.value ? currentPage.value + 1 : 2,
      pageSize: 3
    })
    return {
      useMoreData,
      isLastPage
    }
  },
  components: {
    ColumnList
  }
})
</script>
