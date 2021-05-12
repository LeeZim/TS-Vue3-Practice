<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
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
        v-if="!isEnd"
        class="btn btn-outline-primary mt-2 mb-5 mx-auto w-25"
        @click="getMoreColumns"
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

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore<GlobalStateProps>()
    const isEnd = computed(() => store.state.columns.isEnd)
    const getMoreColumns = () => {
      store.commit('getMoreColumns')
      store.dispatch('fetchColumns')
    }
    return {
      getMoreColumns,
      isEnd
    }
  },
  components: {
    ColumnList
  }
})
</script>
