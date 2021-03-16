<template>
  <a
    :href="speakingEngagement.link"
    class="border-primary-muted hover:border-primary no-external-link max-w-screen md:max-w-full text-primary flex flex-col w-full h-full border-b-2 border-l-2 rounded-bl"
    rel="noreferrer"
    target="_blank"
  >
    <div class="p-4">
      <h2 class="text-initial text-2xl">
        {{ speakingEngagement.title }}
      </h2>
      <div class="text-secondary py-2">
        {{ speakingEngagement.event_name }}
      </div>
      <nuxt-content :document="speakingEngagement" />
      <p class="text-initial align-middle">View Talk <external-link /></p>
    </div>
  </a>
</template>

<script>
import ExternalLink from '@/assets/images/icons/external_link.svg?inline'

export default {
  props: {
    speakingEngagement: Object
  },
  components: {
    ExternalLink
  }
}
</script>

<style></style>
