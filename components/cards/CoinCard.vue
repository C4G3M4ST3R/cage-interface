<template>
  <div class="card">
    <nuxt-link to="#!">
      <div class="card-content p-3">
        <div class="d-flex">
          <img
            class="rounded-circle"
            src="https://raw.githubusercontent.com/pie-dao/brand/master/PIE%20Tokens/PLAY.svg"
          />

          <div class="ml-3 mt-2">
            <h4 class="text-uppercase text-left mb-0">PLAY</h4>
            <div class="d-flex">
              <p class="mr-3">
                $0.934883
              </p>
              <p class="success" v-if="isEven">
                <i class="feather icon-arrow-up"></i>
                5.46%
              </p>
              <p class="danger" v-else>
                <i class="feather icon-arrow-down"></i>
                -5.67%
              </p>
            </div>
          </div>
        </div>

        <p class="text-left mt-2">
          Complete exposure to the Metaverse and NFTs. In collab with NFTX
        </p>

        <hr />

        <div class="float-left mt-1">
          <p>
            Since inception
            <span class="font-weight-bold ml-1">
              -5.57%
            </span>
          </p>
        </div>

        <div class="float-right mt-1">
          <nuxt-link to="/swap" class="link-primary">
            BUY
          </nuxt-link>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    isEven: Boolean,
  },
};
</script>

<style scoped>
.card {
  /* display: inline-flex; */
  border: double 1px transparent;
  border-radius: 25px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #ff8932, #a50bce, #1fa6e0, #47d482);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: none !important;
}

.card:hover {
  transform: scale(1.08);
  z-index: 9;
}

img {
  height: 60px;
}

.success {
  color: #24d897;
}

.danger {
  color: #fc4057;
}

.link-primary {
  font-size: 1.2rem;
}

h4 {
  color: #000;
}

p {
  color: #4d4d4d;
}
</style>
