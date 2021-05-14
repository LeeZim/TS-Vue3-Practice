<template>
  <div class="row">
    <div v-for="column in columnsList" :key="column" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar.url" class="rounded-circle border border-light my-3" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-start mx-4">{{ column.description }}</p>
          <router-link class="btn btn-outline-primary" :to="`/detail/${column._id}`"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ColumnProps, GlobalStateProps } from '../store'

export default defineComponent({
  setup() {
    const store = useStore<GlobalStateProps>()
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed<ColumnProps[]>(() => store.getters.getColumns())
    // 数据预处理，如果没有头像，则设置默认图标
    const columnsList = computed<ColumnProps[]>(() => {
      return (
        list.value &&
        list.value.map((column: ColumnProps) => {
          if (column.avatar && !column.avatar.url) {
            column.avatar = { ...column.avatar, url: '/src/assets/DefaultIcon.jpg' }
          }
          return column
        })
      )
    })

    return {
      columnsList
    }
  }
})
</script>
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
