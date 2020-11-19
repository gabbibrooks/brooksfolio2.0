<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const speakingEngagements = await $content('speaking').fetch()

    return {
      speakingEngagements
    }
  }
}
</script>

<style></style>
