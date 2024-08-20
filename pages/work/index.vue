<template>
  <div class="main-content-container">
    <hero :header="workPage.header" :body="workPage.description" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <section v-if="projects.length > 0">
        <ol class="projects-list">
          <li class="project" v-for="project in projects" :key="project.slug">
            <project-card :project="project" />
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  async asyncData({ $content }) {
    const projects = await $content('work/projects').fetch()
    const workPage = await $content('workpage').fetch()

    return { projects, workPage }
  },
  head() {
    return {
      title: 'Work - Gabrielle Brooks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.workPage.description,
        },
      ],
    }
  },
  components: {
    Hero,
    ProjectCard,
  },
}
</script>

<style scoped>
.projects-list {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: minmax(0, 1fr);
}

.project {
  position: relative;
  display: flex;
  flex-direction: column;
}

@media all and (min-width: 800px) {
  .projects-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
