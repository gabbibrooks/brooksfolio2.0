<template>
  <vue-plyr>
    <div class="plyr__video-embed">
      <iframe :src="videoUrl" allowfullscreen allowtransparency></iframe>
    </div>
  </vue-plyr>
</template>

<script>
export default {
  props: {
    videoUrl: String
  }
}
</script>

<style></style>
