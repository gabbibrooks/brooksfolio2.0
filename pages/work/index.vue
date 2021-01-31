<template>
  <div>
    <ol class="grid gap-12 list-none grid-cols-projects">
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
  components: {
    ProjectCard
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'My Work')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
