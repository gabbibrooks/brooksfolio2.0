<template>
  <div>
    <cld-image
      class="relative w-full overflow-hidden rounded -z-1"
      :public-id="imageSrc"
      crop="scale"
      fetchFormat="auto"
      quality="80"
      loading="lazy"
    >
      <cld-placeholder type="blur" />
    </cld-image>
    <nuxt-link
      class="flex flex-col w-full p-4 ml-6 -mt-12 border-2 rounded border-primary-muted hover:border-primary no-external-link text-initial bg-primary"
      :to="project.path"
    >
      <h2 class="text-2xl">{{ project.title }}</h2>
      <div class="py-2 text-primary">{{ project.description }}</div>
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
