<template>
  <footer class="p-3 p-lg-5 mb-3 mx-5">
    <div class="float-left ml-5">
      <div class="d-flex justify-content-between">
        <nuxt-link to="/" class="mr-3 mr-lg-4">Cage {{ year }}</nuxt-link>
        <a :href="blockLink" class="mr-3 mr-lg-4">Block: {{ block }}</a>
        <a href="mailto:hello@cag3.io">hello@cag3.io</a>
      </div>
    </div>
    <div class="float-right mr-3">
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
}

footer ul {
  list-style: none;
}

footer ul li {
  padding: 0.5rem 1rem;
  padding-left: 0;
}

footer ul li a {
  color: #4f5665;
}
</style>
