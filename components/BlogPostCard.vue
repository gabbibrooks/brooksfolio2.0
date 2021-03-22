<template>
  <div class="[ blog-post-card ] [ bg-secondary text-primary ]">
    <article>
      <nuxt-link class="[ not-external-link text-primary ]" :to="post.path">
        <h2 class="title">{{ post.title }}</h2>
        <small class="text-secondary"
          >{{ post.formattedCreatedDate }} &mdash; {{ post.readingTime }}</small
        >
        <div class="description">{{ post.description }}</div>
        <span class="read-more">Read More</span>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped>
.blog-post-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
}

.blog-post-card:hover {
  background-color: var(--color-bg-secondary);
}

.blog-post-card .description {
  padding: 0.5rem 0;
}

.blog-post-card:hover .description {
  color: var(--color-text-primary);
}

.blog-post-card:hover .title,
.blog-post-card:hover .read-more {
  color: var(--color-primary);
}
</style>
