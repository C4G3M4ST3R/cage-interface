<template>
  <footer class="p-3 px-lg-5 my-3 mx-5 d-flex justify-content-between">
    <div class="d-flex justify-content-between">
      <nuxt-link to="/" class="mr-3 mr-lg-4">Cage {{ year }}</nuxt-link>
      <a href="mailto:masters@cag3.io">masters@cag3.io</a>
    </div>
    <div class="d-flex justify-content-between">
      <a href="https://twitter.com" class="mr-3 mr-lg-4">Twitter</a>
      <a href="https://medium.com" class="mr-3 mr-lg-4">Medium</a>
      <a href="https://discord.com" class="mr-3 mr-lg-4">Documentation</a>
      <a href="https://github.com" class="mr-3 mr-lg-4">Github</a>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
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
