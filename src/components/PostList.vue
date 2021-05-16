<template>
  <div class="post-list">
    <article v-for="post in list" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>
          <router-link :to="`/posts/${post._id}/`">{{ post.title }}</router-link>
        </h4>
        <div class="row my-3 align-items-center">
          <!-- eslint-disable-next-line prettier/prettier -->
          <div v-if="(post.image && typeof post.image !== 'string')" class="col-4">
            <img :src="post.image.fitUrl" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <p :class="{ 'col-8': post.image }" class="text-muted">{{ post.excerpt }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GlobalStateProps, AvatarProps, PostProps } from '../store'
import { addFitImageUrl } from '../helper'

export default defineComponent({
  setup() {
    const store = useStore<GlobalStateProps>()
    const route = useRoute()
    const list = computed<PostProps[]>(() => {
      const posts: PostProps[] = store.getters.getPosts()
      if (posts) {
        posts.map((post) => {
          if (post.image) {
            addFitImageUrl<AvatarProps>(post.image, 200, 110, ['m_fill'])
          }
          return post
        })
      }
      return posts
    })
    onMounted(() => {
      store.dispatch('fetchPosts', route.params.id)
    })
    return {
      list
    }
  }
})
</script>
