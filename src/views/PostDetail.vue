<template>
  <article class="w-75 mx-auto mb-5 pb-3" v-if="post">
    <img
      :src="post.image.url"
      alt="currentPost.title"
      class="rounded-lg img-fluid my-4"
      v-if="post.image"
    />
    <h2 class="mb-4">{{ post.title }}</h2>
    <div
      class="user-profile-component border-top border-bottom py-3 mb-5 align-items-center row g-0"
    >
      <!-- <div class="col">
        <user-profile :user="post.author" v-if="typeof post.author === 'object'"></user-profile>
      </div> -->
      <span class="text-muted col text-right font-italic">发表于：{{ post.createdAt }}</span>
    </div>
    <div v-html="post.content"></div>
    <!-- <div v-if="showEditArea" class="btn-group mt-5">
        <router-link
          type="button"
          class="btn btn-success"
          :to="{name: 'create', query: { id: currentPost._id}}"
        >
          编辑
        </router-link>
        <button type="button" class="btn btn-danger" @click.prevent="modalIsVisible = true">删除</button>
      </div> -->
  </article>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// import MarkdownIt from 'markdown-it'
import { GlobalStateProps, PostProps } from '../store'

export default defineComponent({
  setup() {
    const store = useStore<GlobalStateProps>()
    const route = useRoute()
    const post = computed<PostProps>(() => store.getters.getPostById(route.params.id))
    onMounted(() => {
      store.dispatch('fetchPost', route.params.id)
    })
    // const md = new MarkdownIt()
    // const currentContent = computed(() => {
    //   if (post.value.content) {
    //     return md.render(post.value.content)
    //   }
    //   return ''
    // })
    return {
      post
      // currentContent
    }
  }
})
</script>
