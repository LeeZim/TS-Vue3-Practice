<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.fitUrl"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <!-- <post-list :list="list"></post-list> -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = useStore()
    const column = computed(() => {
      return store.getters.getColumnById(route.params.id)
    })
    console.log(column.value)
    return {
      column
    }
  }
})
</script>
