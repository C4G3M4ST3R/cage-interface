<template>
  <main class="mx-lg-5 px-lg-5 py-lg-5">
    <div class="row pl-5 mr-2" id="table-hover-row">
      <div class="col-12">
        <div class="text-left mb-4">
          <h3>
            🆕 Pie Vaults
          </h3>
          <p>Yield Bearing & Meta-Governance Enabled</p>
        </div>

        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th class="text-left">Index</th>
                <th>Assets</th>
                <th>24H Change</th>
                <th>Current Price</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="n in 6">
                <tr :key="n">
                  <td class="text-left">
                    <div class="d-flex">
                      <img :src="ethLogo" height="35" alt="Bootstrap" />
                      <h5 class="font-weight-regular ml-2 mb-0 mt-2">PLAY</h5>
                    </div>
                  </td>
                  <td class="text-center">
                    <a class="" href="#">
                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                        v-if="n % 2 == 0"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png"
                          alt="MANA"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                        v-if="n % 2 !== 0"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png"
                          alt="ENJ"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                        v-if="n % 2 == 0"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xa1d6df714f91debf4e0802a542e13067f31b8262.png"
                          alt="RFOX"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 !== 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x3845badade8e6dff049820680d1f14bd3903a5d0.png"
                          alt="SAND"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png"
                          alt="AXS"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png"
                          alt="NFTX"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        v-if="n % 2 !== 0"
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xdacd69347de42babfaecd09dc88958378780fb62.png"
                          alt="wATRI"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x3f382dbd960e3a9bbceae22651e88158d2791550.png"
                          alt="GHST"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 !== 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x69BbE2FA02b4D90A944fF328663667DC32786385/logo.png"
                          alt="PUNK-BASIC"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        v-if="n % 2 == 0"
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0fe629d1E84E171f8fF0C1Ded2Cc2221Caa48a3f/logo.png"
                          alt="MASK"
                        />
                      </div>
                    </a>
                  </td>
                  <td>
                    <p class="my-0" v-if="n % 3 == 0">
                      -
                    </p>

                    <p class="success my-0" v-else-if="n % 2 == 0">
                      <i class="feather icon-arrow-up"></i>
                      5.46%
                    </p>
                    <p class="danger my-0" v-else>
                      <i class="feather icon-arrow-down"></i>
                      -5.67%
                    </p>
                  </td>
                  <td class="text-center">
                    <p class="my-0 price">
                      ${{ formatAmount(Math.random() * 15) }}
                    </p>
                  </td>
                  <td>
                    <button
                      class="btn btn-primary font-weight-regular px-4 py-2"
                    >
                      Play
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-12 mt-5">
        <div class="text-left mb-4">
          <h3>
            🥧 Explore Pies
          </h3>
          <p>An Entire Portfolio in a Single Token</p>
        </div>

        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th class="text-left">Index</th>
                <th>Assets</th>
                <th>24H Change</th>
                <th>Current Price</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="n in 4">
                <tr :key="n">
                  <td class="text-left">
                    <div class="d-flex">
                      <img :src="ethLogo" height="35" alt="Bootstrap" />
                      <h5 class="font-weight-regular ml-2 mb-0 mt-2">PLAY</h5>
                    </div>
                  </td>
                  <td class="text-center">
                    <a class="" href="#">
                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                        v-if="n % 2 == 0"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xa1d6df714f91debf4e0802a542e13067f31b8262.png"
                          alt="RFOX"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 !== 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x3845badade8e6dff049820680d1f14bd3903a5d0.png"
                          alt="SAND"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png"
                          alt="AXS"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png"
                          alt="NFTX"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        v-if="n % 2 !== 0"
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0xdacd69347de42babfaecd09dc88958378780fb62.png"
                          alt="wATRI"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 == 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://s3.amazonaws.com/token-icons/0x3f382dbd960e3a9bbceae22651e88158d2791550.png"
                          alt="GHST"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        class="avatar pull-up my-0"
                        v-if="n % 2 !== 0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x69BbE2FA02b4D90A944fF328663667DC32786385/logo.png"
                          alt="PUNK-BASIC"
                        />
                      </div>

                      <div
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="top"
                        title=""
                        v-if="n % 2 == 0"
                        class="avatar pull-up my-0"
                        data-original-title="Alberto Glotzbach"
                      >
                        <img
                          class="close-icons inline icon"
                          src="https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0fe629d1E84E171f8fF0C1Ded2Cc2221Caa48a3f/logo.png"
                          alt="MASK"
                        />
                      </div>
                    </a>
                  </td>
                  <td>
                    <p class="my-0" v-if="n % 3 == 0">
                      -
                    </p>

                    <p class="success my-0" v-else-if="n % 2 == 0">
                      <i class="feather icon-arrow-up"></i>
                      5.46%
                    </p>
                    <p class="danger my-0" v-else>
                      <i class="feather icon-arrow-down"></i>
                      -5.67%
                    </p>
                  </td>
                  <td class="text-center">
                    <p class="my-0 price">
                      ${{ formatAmount(Math.random() * 15) }}
                    </p>
                  </td>
                  <td>
                    <nuxt-link
                      type="button"
                      to="/swap"
                      class="btn btn-primary font-weight-regular px-4 py-2"
                    >
                      Play
                    </nuxt-link>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ethLogo:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    };
  },
};
</script>

<style scoped>
.price,
table thead th,
main p {
  font-size: 1.2rem;
  font-weight: 100;
}

table tbody td,
table thead th {
  text-align: center;
  padding: 15px;
}

table thead th {
  border-bottom: 0;
  /* border-top: 0;
  border-right: 0; */
}

.avatar {
  background: transparent;
}

.avatar img {
  height: 35px;
  margin-right: -20px;
}

.success {
  color: #24d897;
}

.danger {
  color: #fc4057;
}

.btn-primary {
  min-width: unset;
  border-radius: 8px;
  text-transform: uppercase;
}

.font-weight-regular {
  font-weight: 600;
}
</style>
