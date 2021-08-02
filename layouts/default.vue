<template>
  <div>
    <Navbar v-if="notFound" />
    <connect-wallet :key="connectKey" @close.once="closeConnect" />
    <Nuxt />
    <Footer v-if="notFound" />
  </div>
</template>

<script>
import Footer from '~/components/navs/Footer.vue';
import Navbar from '~/components/navs/Navbar.vue';
import ConnectWallet from '../components/utils/ConnectWallet.vue';

import Vue from 'vue';
import mixins from '../mixins/global.js';
Vue.mixin(mixins);

export default {
  components: { Navbar, Footer, ConnectWallet },
  computed: {
    notFound() {
      return !!this.$route.name;
    },
    connectKey() {
      return this.$store.state.connectKey;
    },
  },
  methods: {
    closeConnect() {
      this.$store.commit('set', {
        connectKey: this.connectKey + 1,
      });

      // const title = this.connectKey > 45 ? 'Welcome Back' : 'Welcome';
      // this.showSuccess(
      //   title,
      //   'Now you can take assessment on courses and get your certificate in NFT',
      // );
    },
  },
};
</script>

<style>
.placeholder-content {
  overflow: hidden;
}

.placeholder-content_item {
  width: 90%;
  z-index: 2;
  background-size: 1300px;
}

.placeholder-content_item:nth-child(odd) {
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeholderAnimate;
  background: #f6f7f8;
  background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
}

.placeholder-content_item:nth-child(1) {
  width: 65%;
}

.placeholder-content_item:nth-child(even) {
  background-color: #fff;
}

@keyframes placeholderAnimate {
  0% {
    background-position: -650px 0;
  }
  100% {
    background-position: 650px 0;
  }
}

.ellipsis {
  max-width: 350px;
  margin: 0 0 1em 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
