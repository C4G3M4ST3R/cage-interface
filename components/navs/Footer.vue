<template>
  <footer class="p-3 px-lg-5 my-3 mx-5 d-flex justify-content-between">
    <div class="d-flex justify-content-between">
      <nuxt-link to="/" class="mr-3 mr-lg-4">Cage {{ year }}</nuxt-link>
      <a :href="blockLink" class="mr-3 mr-lg-4">Block: {{ block }}</a>
      <a href="mailto:hello@cag3.io">hello@cag3.io</a>
    </div>
    <div class="d-flex justify-content-between">
      <a href="https://discord.com" class="mr-3 mr-lg-4">Discord</a>
      <a href="https://twitter.com" class="mr-3 mr-lg-4">Twitter</a>
      <a href="https://medium.com" class="mr-3 mr-lg-4">Medium</a>
      <a href="https://discord.com" class="mr-3 mr-lg-4">Forum</a>
      <a href="https://discord.com" class="mr-3 mr-lg-4">Documentation</a>
      <a href="https://github.com" class="mr-3 mr-lg-4">Github</a>
      <a href="https://argon.in" class="mt-n2">
        <img
          src="https://raw.githubusercontent.com/pie-dao/assets/master/logos/aragon.svg"
          height="35"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
    block() {
      return '12345675';
    },
    blockLink() {
      return `https://etherscan.io/block/${this.block}`;
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
