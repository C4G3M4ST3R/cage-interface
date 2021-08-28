<template>
  <footer class="p-3 px-lg-5 m-3 mx-lg-5 d-lg-flex justify-content-between">
    <div class="d-lg-flex justify-content-between text-center">
      <nuxt-link to="/" class="mr-3 mr-lg-4">Cage {{ year }}</nuxt-link>
      <a href="mailto:masters@cag3.io">masters@cag3.io</a>
    </div>
    <div class="d-lg-flex justify-content-between text-center">
      <a href="https://twitter.com/cag3_io" target="_blank" class="mx-2 mx-lg-4">Twitter</a>
       <a href="https://t.me/c4g3Index" target="_blank" class="mx-2 mx-lg-4">Telegram</a>
      <a href="https://www.dextools.io/app/uniswap/pair-explorer/0xfe2743bcc93033d92c91f7998c44b112325c8ce2" target="_blank" class="mx-2 mx-lg-4">Dextools</a>
      <a href="https://t.me/cag3_Index" target="_blank" class="mx-2 mx-lg-4">Announcement</a>
      <a href="https://docs.cag3.io" target="_blank" class="mx-2 mx-lg-4">Docs</a>
      <a href="https://github.com/C4G3M4ST3R" target="_blank" class="ml-2">Github</a>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer a {
  color: #4f5665 !important;
  font-size: 16px !important;
}

footer a:hover {
  text-decoration: underline !important;
}
</style>
