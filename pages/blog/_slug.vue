<template>
  <div>
    <nuxt-content :document="post" />

    <PrevNext :surround="surround" />
  </div>
</template>

<script>
import PrevNext from "~/components/PrevNext";

export default {
  components: {
    PrevNext
  },
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    const surround = await $content("blog")
      .sortBy("createdAt", "asc")
      .only(["title", "path", "createdAt"])
      .surround(post.slug)
      .fetch();

    return { post, surround };
  }
};
</script>

<style></style>
