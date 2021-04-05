<template>
  <div class="[ blog-post-card ] [ bg-secondary text-primary ]">
    <article class="blog-post-content-wrapper">
      <nuxt-link class="text-primary" :to="post.path">
        <h2 class="title">{{ post.title }}</h2>
        <small class="text-secondary"
          >{{ post.formattedCreatedDate }} &mdash; {{ post.readingTime }}</small
        >
        <div class="description">{{ post.description }}</div>
        <div class="read-more">Read More</div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style scoped>
.blog-post-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4rem -2rem rgba(0, 0, 0, 0.4);
}

.blog-post-content-wrapper:focus-within {
  outline: 2px solid;
  outline-offset: 0.25rem;
}

.blog-post-content-wrapper:focus-within * {
  outline: none;
}

.blog-post-card .description {
  padding: 0.5rem 0;
  font-size: 1rem;
}

.title {
  font-size: 1.35rem;
  font-weight: 500;
}

.blog-post-content-wrapper:hover .title,
.blog-post-content-wrapper:hover .read-more {
  color: var(--color-primary);
}
</style>
