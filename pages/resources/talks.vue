<template>
  <div>
    <div class="[ speaking-header ] [ text-primary ]">
      <h1 class="title">
        Speaking Engagements
      </h1>
      <span class="num-speaking-engagements">
        {{ numberOfSpeakingEngagements }}</span
      >
    </div>
    <ol class="speaking-engagements">
      <li
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <speaking-card :speakingEngagement="speakingEngagement" />
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
      speakingEngagements
    }
  },
  head() {
    return {
      title: 'Speaking - Zachary Brooks'
    }
  },
  computed: {
    numberOfSpeakingEngagements() {
      const engagementCount = this.speakingEngagements.length
      return engagementCount > 1 ? `${engagementCount} Talks` : '1 Talk'
    }
  }
}
</script>

<style scoped>
.speaking-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.title {
  padding-left: 2rem;
  padding-bottom: 1rem;
}

.num-speaking-engagements {
  display: none;
}

.speaking-engagements {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media screen and (min-width: 640px) {
  .num-speaking-engagements {
    display: block;
    font-size: 1.25rem;
    padding-right: 2rem;
  }

  .title {
    padding-left: 0;
  }
}
</style>
