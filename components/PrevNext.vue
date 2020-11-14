<template>
  <div class="PrevNext">
    <nuxt-link v-if="surround[0]" :to="surround[0].path" class="PrevNext-prev">
      <small>[Prev]</small><br />{{ surround[0].title }}
    </nuxt-link>
    <nuxt-link v-if="surround[1]" :to="surround[1].path" class="PrevNext-next">
      <small>[Next]</small><br />{{ surround[1].title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    surround: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style></style>
