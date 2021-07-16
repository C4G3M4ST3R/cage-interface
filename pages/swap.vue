<template>
  <section class="container my-3">
    <div class="text-center">
      <h2 class="mb-3">Exchange Tokens</h2>
      <p>Swap Pies at the best rates.</p>
    </div>

    <div class="card w-50 mx-auto mt-4">
      <div class="card-content p-3">
        <form @submit.prevent="">
          <div class="input-field py-4 px-3">
            <label for="from">
              From
            </label>
            <br />
            <input placeholder="0.0" type="number" />
            <div class="float-right">
              <button class="btn btn-black" @click.prevent="showListOfTokens">
                <img
                  class="rounded-pill"
                  height="25"
                  alt="ETH logo"
                  src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
                />
                ETH
                <i class="feather icon-chevron-down text-white"></i>
              </button>
            </div>
          </div>

          <div class="text-center my-4">
            <i class="feather icon-arrow-down"></i>
          </div>

          <div class="input-field py-4 px-3">
            <label for="to">
              To (estimated)
            </label>
            <br />
            <input value="0" type="number" />
            <div class="float-right">
              <button class="btn btn-black" @click.prevent="showListOfTokens">
                <img
                  class="rounded-pill"
                  height="25"
                  alt="ETH logo"
                  src="https://github.com/pie-dao/brand/blob/master/PIE%20Tokens/BCP.png?raw=true"
                />
                BCP
                <i class="feather icon-chevron-down text-white"></i>
              </button>
            </div>
          </div>

          <div class="my-3 d-flex justify-content-between">
            <p>Max Slippage</p>
            <p>3%</p>
          </div>

          <div>
            <button class="btn btn-block btn-primary">
              Review Order
            </button>
          </div>
        </form>
      </div>
    </div>

    <tokens />
  </section>
</template>

<script>
import Tokens from '../components/modals/Tokens.vue';
export default {
  components: { Tokens },
  methods: {
    showListOfTokens() {
      $('#selectToken').modal({
        backdrop: 'static',
        keyboard: false,
      });
    },
  },
};
</script>

<style scoped>
section > div > h2 {
  font-size: 3rem;
  line-height: 3.5rem;
  color: #000;
}
section > div > p {
  font-size: 1.8rem;
  /* font-size: 1.2rem; */
  color: #4d4d4d;
}

.btn-block,
.input-field,
section .card {
  border-radius: 20px;
}

.input-field {
  border: solid 1px #cecece;
}

.input-field label {
  font-size: 1.2rem;
  font-weight: 100;
}

.input-field input {
  color: black;
  /* width: 0px; */
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
}

.btn-black {
  font-size: 20px;
  font-weight: 500;
  border-radius: 14px;
}

.btn-black img {
  margin-bottom: 2px;
}

.icon-arrow-down {
  font-size: 24px;
  color: rgb(204, 204, 204);
}

form p {
  font-size: 1.2rem;
  margin: 0;
}

.btn-block {
  font-size: 2rem;
  font-weight: 100;
}
</style>
