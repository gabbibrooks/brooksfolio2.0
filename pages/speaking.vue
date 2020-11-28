<template>
  <div></div>
</template>

<script>
export default {
  layout: 'content',
  async asyncData({ $content }) {
    const speakingEngagements = await $content('speaking').fetch()

    return {
      speakingEngagements
    }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Speaking')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
