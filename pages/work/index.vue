<template>
  <div>
    <ol class="grid gap-12 list-none md:grid-cols-projects grid-cols-full">
      <li
        clss="relative flex flex-col"
        v-for="project in projects"
        :key="project.slug"
      >
        <project-card :project="project" />
      </li>
    </ol>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'

export default {
  layout: 'content',
  async asyncData({ $content }) {
    const projects = await $content('work/projects').fetch()

    return { projects }
  },
  head() {
    return {
      title: 'Work - Zachary Brooks',
    }
  },
  components: {
    ProjectCard,
  },
}
</script>

<style></style>
