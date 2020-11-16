<template> </template>

<script>
export default {
  async asyncData({ $content }) {
    const aboutpage = await this.$content('aboutpage').fetch()
    const speakingEngagements = await this.$content('speaking').fetch()

    return {
      aboutpage,
      speakingEngagements
    }
  }
}
</script>

<style></style>
