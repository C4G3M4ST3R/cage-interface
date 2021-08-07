<template>
  <footer class="p-3 px-lg-5 m-3 mx-lg-5 d-lg-flex justify-content-between">
    <div class="d-lg-flex justify-content-between text-center">
      <nuxt-link to="/" class="mr-3 mr-lg-4">Cage {{ year }}</nuxt-link>
      <a href="mailto:masters@cag3.io">masters@cag3.io</a>
    </div>
    <div class="d-lg-flex justify-content-between text-center">
      <a href="https://twitter.com">Twitter</a>
      <a href="https://medium.com" class="mx-2 mx-lg-4">Medium</a>
      <a href="https://discord.com">Documentation</a>
      <a href="https://github.com" class="ml-2">Github</a>
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
