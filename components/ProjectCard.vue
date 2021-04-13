<template>
  <div class="project-card">
    <cld-image
      v-if="imageSrc"
      :public-id="imageSrc"
      crop="scale"
      fetchFormat="auto"
      quality="80"
      responsive
      :alt="`Image of ${project.title} project`"
    >
      <cld-placeholder />
    </cld-image>
    <nuxt-link
      class="[ link ] [ bg-secondary text-primary ]"
      :to="project.path"
    >
      <h2 class="title">{{ project.title }}</h2>
      <div class="description">{{ project.description }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import { getCloudinaryId } from '~/utils/image'

export default {
  props: {
    project: Object,
  },
  computed: {
    imageSrc() {
      return getCloudinaryId(this.project.main_image)
    },
  },
}
</script>

<style scoped>
.cld-image {
  position: relative;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  border-radius: 0.25rem;
}

.project-card .link {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  margin-top: -1.5rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4rem -2rem rgba(0, 0, 0, 0.4);
}

.project-card:focus-within {
  outline: 2px solid;
  outline-offset: 0.25rem;
}

.project-card:focus-within * {
  outline: none;
}

.project-card .description {
  padding: 0.5rem 0;
  font-size: 1rem;
}

.project-card .title {
  font-size: 1.35rem;
  font-weight: 500;
}

.project-card:hover .title {
  color: var(--color-primary);
}

@media all and (min-width: 800px) {
  .project-card .link {
    margin-top: -3rem;
    margin-left: 1.5rem;
  }
}
</style>
