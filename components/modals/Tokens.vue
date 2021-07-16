<template>
  <div class="modal" id="selectToken" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content mx-auto">
        <div class="header d-flex p-4 justify-content-between mb-3">
          <h4 class="my-0">
            Select a Token
          </h4>

          <button
            type="button"
            class="close"
            style="color: #000"
            data-dismiss="modal"
            @click.prevent="closeModal"
            aria-label="Close"
          >
            <i
              class="feather icon-x font-weight-bold"
              style="font-size: 24px"
            ></i>
          </button>
        </div>

        <div class="px-4">
          <div class="d-flex justify-content-between mb-3 pr-3">
            <p class="my-0">
              Token Name
            </p>

            <p class="my-0">
              Balance
            </p>
          </div>

          <div id="scroller" class="pr-3 mb-3">
            <template v-for="n in 10">
              <div class="d-flex justify-content-between mb-3" :key="n">
                <div class="coin d-flex">
                  <img
                    height="40"
                    src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
                    alt="ETH"
                    class="rounded-pill mr-2"
                  />
                  <h4 class="my-0 mt-2">ETH</h4>
                </div>

                <p class="my-0 mt-2 balance" :class="{ none: n % 3 == 0 }">
                  {{ n % 3 === 0 ? '-' : '0.032030223' }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      $('#selectToken .close').click();
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  max-width: 600px;
}

.header {
  background-color: #f7f7f7;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

p.balance {
  font-size: 1.2rem;
}

p.none {
  margin-right: 25px;
}

#scroller {
  max-height: 55vh;
  overflow-y: auto;
  margin-right: -15px;
}

.modal#selectToken {
  background-color: #191919 !important;
}
</style>
