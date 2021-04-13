<template>
  <div class="main-content-container">
    <hero :header="pageHeader" :body="pageDescription" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <section v-if="projects.length > 0">
        <ol class="projects-list">
          <li clss="project" v-for="project in projects" :key="project.slug">
            <project-card :project="project" />
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('work/projects').fetch()

    return { projects }
  },
  data() {
    return {
      pageHeader: 'My Work',
      pageDescription:
        'Here you fill find various projects that I have worked on including open source projects and work for clients',
    }
  },
  head() {
    return {
      title: 'Work - Zachary Brooks',
    }
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
