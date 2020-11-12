<template>
  <div class="flex justify-center">
    <nuxt-content :document="homepage" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homepage = await $content("homepage").fetch();
    const contacts = await $content("data/contact").fetch();

    return {
      homepage,
      contacts
    };
  }
};
</script>

<style></style>
