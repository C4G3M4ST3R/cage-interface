<template>
  <footer class="p-3 py-lg-4 mb-3 bg-rgba-secondary text-center">
    <div class="d-flex justify-content-center">
      <a href="#" class="mx-3">Medium</a>
      <a href="#" class="mx-3">Etherscan</a>
      <a href="#" class="mx-3">Coinmarketcap</a>
      <a href="#" class="mx-3">CoinGecko</a>
      <a href="#" class="mx-3">Shytoshi</a>
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
