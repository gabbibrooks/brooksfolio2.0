<template>
  <div>
    <ol class="grid grid-cols-1 gap-32 ml-0 list-none lg:gap-12 lg:grid-cols-3">
      <li
        clss="flex flex-col"
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <a
          :href="speakingEngagement.link"
          class="flex flex-col w-full h-full border-b-2 border-l-2 rounded-bl border-primary-muted hover:border-primary no-external-link md:flex-row max-w-screen md:max-w-full text-primary"
          rel="noreferrer"
          target="_blank"
        >
          <div class="p-4">
            <h2 class="text-2xl text-initial">
              {{ speakingEngagement.title }}
            </h2>
            <div class="py-2 text-secondary">
              {{ speakingEngagement.event_name }}
            </div>
            <nuxt-content :document="speakingEngagement" />
          </div>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
import VideoCard from '~/components/VideoCard'

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
  components: {
    VideoCard
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Speaking')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
