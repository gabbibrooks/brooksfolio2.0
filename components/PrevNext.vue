<template>
  <div
    v-if="surround[0] || surround[1]"
    class="grid-rows-auto border-primary rounded-2xl grid my-16 border-2"
    :class="[layoutClasses]"
  >
    <nuxt-link
      v-if="surround[0]"
      :to="surround[0].path"
      class="grid-rows-auto-1 text-primary grid no-underline"
      :class="[prevClasses]"
    >
      <strong
        class="border-primary inline-flex items-center justify-start px-12 py-4 border-b-2"
        ><arrow-left /> Prev</strong
      >
      <p class="px-12 py-4">{{ surround[0].title }}</p>
    </nuxt-link>
    <nuxt-link
      v-if="surround[1]"
      :to="surround[1].path"
      class="grid-rows-auto-1 text-primary border-primary grid text-right no-underline"
      :class="[nextClasses]"
    >
      <!-- <strong class="border-primary px-12 py-4 border-b-2">Next →</strong> -->
      <strong
        class="border-primary inline-flex items-center justify-end px-12 py-4 border-b-2"
        >Next <arrow-right
      /></strong>
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
  computed: {
    layoutClasses() {
      if (this.surround[0] && this.surround[1]) {
        return 'grid-cols-2'
      }

      return 'grid-cols-1'
    },
    prevClasses() {
      if (this.surround[1]) {
        return 'rounded-l-xl'
      }

      return 'rounded-xl'
    },
    nextClasses() {
      if (this.surround[0]) {
        return 'rounded-r-xl border-l-2'
      }
      return 'rounded-xl'
    }
  },
  components: {
    ArrowRight,
    ArrowLeft
  }
}
</script>

<style></style>
