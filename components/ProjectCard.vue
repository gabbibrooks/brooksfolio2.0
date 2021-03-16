<template>
  <div>
    <cld-image
      class="-z-1 relative w-full overflow-hidden rounded"
      v-if="imageSrc"
      :public-id="imageSrc"
      crop="scale"
      fetchFormat="auto"
      quality="80"
      responsive
      loading="lazy"
    >
      <cld-placeholder />
    </cld-image>
    <nuxt-link
      class="border-primary-muted hover:border-primary no-external-link text-initial bg-primary flex flex-col w-full p-4 ml-6 -mt-12 border-2 rounded"
      :to="project.path"
    >
      <h2 class="text-2xl">{{ project.title }}</h2>
      <div class="text-primary py-2">{{ project.description }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import Tag from '~/components/Tag'
import { getCloudinaryId } from '~/utils/image'

export default {
  props: {
    project: Object
  },
  computed: {
    imageSrc() {
      return getCloudinaryId(this.project.main_image)
    }
  },
  components: {
    Tag
  }
}
</script>

<style></style>
