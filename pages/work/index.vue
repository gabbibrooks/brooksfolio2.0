<template>
  <div>
    <ul class="">
      <li v-for="project in projects" :key="project.slug" class="">
        <nuxt-link class="" :to="project.path">
          {{ project.title }} &mdash;
          <small>{{ project.createdAt.split('T')[0] }}</small>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('work/projects')
      .only(['path', 'title', 'tags', 'createdAt', 'updatedAt'])
      .fetch()

    return { projects }
  }
}
</script>

<style></style>
