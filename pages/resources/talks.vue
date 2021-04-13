<template>
  <div>
    <div class="[ speaking-header ] [ text-primary ]">
      <h1 class="title">Speaking Engagements</h1>
      <span class="num-speaking-engagements">
        {{ numberOfSpeakingEngagements }}</span
      >
    </div>
    <ol class="speaking-engagements">
      <li
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <video-card :speakingEngagement="speakingEngagement" />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  layout: 'category',
  async asyncData({ $content }) {
    const speakingEngagements = await $content('speaking')
      .sortBy('date', 'desc')
      .fetch()

    return {
      speakingEngagements,
    }
  },
  head() {
    return {
      title: 'Speaking - Zachary Brooks',
    }
  },
  computed: {
    numberOfSpeakingEngagements() {
      const engagementCount = this.speakingEngagements.length
      return engagementCount > 1 ? `${engagementCount} Talks` : '1 Talk'
    },
  },
}
</script>

<style scoped>
.speaking-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.title {
  padding-bottom: 1rem;
  padding-left: 2rem;
}

.num-speaking-engagements {
  display: none;
}

.speaking-engagements {
  display: grid;
  margin-top: 3rem;
  gap: 3rem;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 640px) {
  .num-speaking-engagements {
    display: block;
    padding-right: 2rem;
    font-size: 1.25rem;
  }

  .title {
    padding-left: 0;
  }
}
</style>
