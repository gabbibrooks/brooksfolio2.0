<template>
  <div
    class="grid grid-cols-2 my-16 border-2 grid-rows-auto border-primary rounded-2xl"
  >
    <nuxt-link
      v-if="surround[0]"
      :to="surround[0].path"
      class="grid no-underline grid-rows-auto-1 text-primary rounded-l-xl"
    >
      <strong class="inline-flex px-12 py-4 border-b-2 border-primary"
        ><arrow-left /> Prev</strong
      >
      <p class="px-12 py-4">{{ surround[0].title }}</p>
    </nuxt-link>
    <nuxt-link
      v-if="surround[1]"
      :to="surround[1].path"
      class="grid text-right no-underline border-l-2 grid-rows-auto-1 text-primary border-primary rounded-r-xl"
    >
      <strong class="px-12 py-4 border-b-2 border-primary"
        ><arrow-right /> Next</strong
      >
      <p class="px-12 py-4">{{ surround[1].title }}</p>
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
