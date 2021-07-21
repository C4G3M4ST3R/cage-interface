<template>
  <main class="p-lg-5 w-75 mx-auto">
    <div class="mx-5">
      <div class="text-left ml-5">
        <nuxt-link to="/farms" class="text-dark">
          <h5 class="my-0">
            <i class="feather icon-arrow-left" style="font-size: 22px"></i>
            Back to Farms
          </h5>
        </nuxt-link>
      </div>
      <div class="card mt-3 rounded-20 mb-0 p-5 mx-5">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img
              src="https://raw.githubusercontent.com/pie-dao/brand/master/PIE%20Tokens/BCP.png"
              height="55"
              class="rounded-circle mr-3"
            />
            <h5 class="my-0 mt-3">{{ coin }}</h5>
          </div>

          <h5 class="mt-3 mb-0 font-weight-thin">Piedao</h5>
        </div>

        <div class="row my-5">
          <div class="col-12 mb-5">
            <div class="input-field rounded-20 py-4 px-3">
              <label for="stake"> Amount to Stake </label>
              <br />
              <input value="0" id="stake" type="number" />
              <div class="input-info">
                <button
                  class="btn btn-black font-weight-bold px-2 ml-3"
                  style="border-radius: 8px"
                >
                  100%
                </button>
                <div class="d-flex mt-2 mr-1">
                  <img
                    src="https://raw.githubusercontent.com/pie-dao/brand/4a2c994845bac4fd24ab58ffac01d4fb83c9d2d9/misc/slp.svg"
                    height="30"
                    class="rounded-circle mr-2"
                  />
                  <p class="my-0 font-weight-bold mt-1">BCP</p>
                </div>
              </div>
            </div>

            <button
              class="btn btn-block text-white rounded-20 mt-3 py-4 bg-grey"
              disabled
            >
              <h5 class="my-0">
                You don't have any {{ coin }} tokens available to stake
              </h5>
            </button>
          </div>

          <div class="col-12 col-lg-6">
            <div
              class="input-field rounded-20 py-4 px-3 d-flex justify-content-between"
            >
              <div>
                <label class="my-0 font-weight-light">
                  Rewards available to claim
                </label>
                <br />
                <p class="my-0 mt-3 ml-1">
                  <span>
                    0.00000
                  </span>
                  <span class="badge badge-black">Escrow</span>
                </p>
              </div>

              <div class="text-right">
                <div class="d-flex justify-content-end">
                  <img
                    src="https://raw.githubusercontent.com/pie-dao/brand/master/PIE%20Tokens/BCP.png"
                    height="25"
                    class="rounded-circle mr-1"
                  />
                  <span>DOUGH</span>
                </div>
                <p class="my-0 mt-3">
                  <span>
                    0.00000
                  </span>
                  <span class="badge badge-black">Liquid</span>
                </p>
              </div>
            </div>

            <button class="btn btn-outline-black rounded-20 mt-3 py-3">
              No rewards available
            </button>
          </div>

          <div class="col-12 col-lg-6">
            <div class="input-field rounded-20 pt-4 pb-3 px-3">
              <label for="unstake">
                Amount to Unstake
              </label>
              <input value="0" type="number" id="unstake" class="mt-2" />
              <div class="input-info">
                <button
                  class="btn btn-black font-weight-bold px-2 ml-3"
                  style="border-radius: 8px"
                >
                  100%
                </button>
                <div class="d-flex mt-2 mr-1">
                  <img
                    src="https://raw.githubusercontent.com/pie-dao/brand/4a2c994845bac4fd24ab58ffac01d4fb83c9d2d9/misc/slp.svg"
                    height="30"
                    class="rounded-circle mr-2"
                  />
                  <p class="my-0 font-weight-bold mt-1">BCP</p>
                </div>
              </div>
            </div>

            <button class="btn btn-outline-black rounded-20 mt-3 py-3">
              Balance too low
            </button>
          </div>
        </div>

        <div class="text-left">
          <h5 style="font-size: 1.8rem">Info</h5>
          <p class="my-0" style="font-size: 16px">
            <span class="font-weight-bold">
              Connect your wallet
            </span>
            - You need to connect to MetaMask before seeing the info.
            <br />
            Looking for APR?
            <a class="text-dark underline" href="#">
              Go to 👨‍🌾 vfat.tools!
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  asyncData({ params }) {
    const { coin } = params;
    return { coin: coin.toUpperCase() };
  },
};
</script>

<style scoped>
@import url('~/assets/css/form.css');

.card {
  box-shadow: none;
  border: 2px solid var(--primary-color);
}

.card h5 {
  font-size: 1.5rem;
}

.input-field {
  position: relative;
}

.input-field p {
  font-size: 1.25rem;
  font-weight: 500;
}

.icon-arrow-left,
.input-field p span:first-of-type {
  position: relative;
  top: 2px;
}

.input-field p span.badge {
  font-weight: 500;
}

.input-info {
  position: absolute;
  right: 15px;
  top: 20px;
}

.bg-grey {
  background-color: #634659 !important;
}

.badge-black {
  background-color: #403857;
}

.btn-outline-black {
  border: solid 1px #cecece !important;
  color: #000;
  text-align: center;
  font-weight: 500;
  width: 100%;
  font-size: 1.1rem;
}

.btn-outline-black:hover {
  background-color: #000;
  color: #fff;
  border-color: transparent !important;
}

.underline {
  font-weight: 500;
  color: #000;
}
</style>
