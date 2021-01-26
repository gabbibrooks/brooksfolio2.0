<template>
  <nuxt-link
    class="flex flex-col w-full p-4 border-b-2 border-l-2 rounded-bl post-link"
    :to="post.path"
  >
    <div class="flex flex-row flex-wrap">
      <tag v-for="tag in post.tags" :key="tag" :category="tag" />
    </div>
    {{ post.title }}
    <small class="text-secondary"
      >{{ post.formattedCreatedDate }} &mdash; {{ post.readingTime }}</small
    >
    <div class="py-2 text-primary">{{ post.description }}</div>
    <div class="text-sm">Read More</div>
  </nuxt-link>
</template>

<script>
import Tag from '~/components/Tag'

export default {
  props: {
    post: Object
  },
  components: {
    Tag
  }
}
</script>

<style></style>
