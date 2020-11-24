<template>
  <div class="flex justify-between mt-6">
    <nuxt-link
      v-if="surround[0]"
      :to="surround[0].path"
      class="inline-flex items-center w-1/2 font-bold text-primary"
    >
      <arrow-left /> {{ surround[0].title }}
    </nuxt-link>
    <nuxt-link
      v-if="surround[1]"
      :to="surround[1].path"
      class="inline-flex items-center w-1/2 font-bold text-primary"
    >
      {{ surround[1].title }} <arrow-right />
    </nuxt-link>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/images/icons/arrow_left.svg?inline'
import ArrowRight from '@/assets/images/icons/arrow_right.svg?inline'

export default {
  props: {
    surround: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ArrowRight,
    ArrowLeft
  }
}
</script>

<style></style>
