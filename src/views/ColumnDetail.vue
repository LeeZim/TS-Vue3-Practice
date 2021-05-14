<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="columnFit">
      <div class="col-3 text-center">
        <img
          :src="columnFit.avatar && columnFit.avatar.fitUrl"
          :alt="columnFit.title"
          class="rounded-circle border"
        />
      </div>
      <div class="col-9">
        <h4>{{ columnFit.title }}</h4>
        <p class="text-muted">{{ columnFit.description }}</p>
      </div>
    </div>
    <PostList />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '@/components/PostList.vue'
import { addFitImageUrl } from '../helper'
import { ColumnProps, AvatarProps } from '../store'

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = useStore()
    const columnFit = computed(() => {
      const column: ColumnProps = store.getters.getColumnById(route.params.id)
      if (column && column.avatar) {
        addFitImageUrl<AvatarProps>(column.avatar, 100, 100)
      }
      return column
    })
    onMounted(() => {
      store.dispatch('fetchColumn', route.params.id)
    })

    return {
      columnFit
    }
  },
  components: {
    PostList
  }
})
</script>
