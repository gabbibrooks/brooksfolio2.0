<template>
  <div>
    <ol class="lg:grid-cols-3 grid grid-cols-1 gap-20 ml-0 list-none">
      <li
        clss="flex flex-col"
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <speaking-card :speakingEngagement="speakingEngagement" />
      </li>
    </ol>
  </div>
</template>

<script>
import SpeakingCard from '@/components/SpeakingCard.vue'

export default {
  layout: 'content',
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
  mounted() {
    this.$store.dispatch('setPageHeader', 'Speaking')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  },
  components: {
    SpeakingCard
  }
}
</script>

<style></style>
