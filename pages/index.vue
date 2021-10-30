<template>
  <main>
    <Navbar :user="user" :selectedNetwork="selectedNetwork" />

    <connect-wallet
      :key="connectKey"
      @close="connectKey++"
      @update="updateUser"
    />

    <div class="container tp p-5" style="color: seashell">
      <div class="row gx-5 tc">
        <div class="col-lg">
          <h3 style="color: seashell; margin-bottom: 15px">C4G3 BRIDGE</h3>
          <form>
            <div class="row g-2 p-3 pb-4 box">
              <div class="col-lg col-sm">
                <label for="exampleInputEmail1" class="form-label">
                  From chain
                </label>

                <select
                  class="form-select select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option disabled selected>- Select -</option>
                  <template v-for="chain in chains">
                    <option :value="chain.chainId" :key="chain.chainId">
                      {{ chain.mainnet }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="col-lg-1"></div>

              <div class="col-lg">
                <label for="exampleInputEmail1" class="form-label">
                  To chain
                </label>

                <select
                  class="form-select select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option disabled selected>- Select -</option>
                  <template v-for="chain in chains">
                    <option :value="chain.chainId" :key="chain.chainId">
                      {{ chain.mainnet }}
                    </option>
                  </template>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row gx-5 tc1">
        <div class="col-lg">
          <div class="row mt-3">
            <div class="col-lg"><p>Token to bridge</p></div>
            <div class="col-lg-6"></div>
            <div class="col-lg" v-if="user.balance">
              <p>Balance: {{ user.balance }}</p>
            </div>
          </div>

          <div class="row g-2 p-3 box">
            <div class="col-lg col-sm d-flex">
              <div class="form-group d-flex">
                <input placeholder="0.0" class="form-control pr-2" />
                <p style="margin-left: 8px" class="my-0 mt-1">C4G3</p>
              </div>
            </div>

            <div class="col-lg-1 text-center">
              <h5 class="my-0 mt-1">To</h5>
              <!-- <div class="form-group"></div> -->
            </div>

            <div class="col-lg d-flex justify-content-end">
              <h3 class="my-0">0.0</h3>
              <p style="margin-left: 8px" class="my-0 mt-1">C4G3</p>
            </div>
          </div>
        </div>
      </div>

      <!--third begins-->

      <div class="row gx-5 tc1">
        <div class="col-lg">
          <div class="row mt-3">
            <div class="col-lg"><p>Bridge Parameters</p></div>
          </div>

          <div class="row g-2 p-1 box">
            <div class="col-lg col-sm p-3">
              <li>Estimated Time of Crosschain Arrival is 10-30 min</li>
              <li>Minimum Crosschain Amount is 1,681 C4G3</li>
              <li>Maximum Crosschain Amount is 421,000,000 C4G3</li>
              <li>
                Crosschain Fee is 0.00 %, Minimum Crosschain Fee is 0.00 C4G3,
                Maximum Crosschain Fee is 0.00 C4G3
              </li>
              <li>
                Crosschain amount larger than 84,100,000 C4G3 could take up to
                12 hours
              </li>
            </div>
          </div>
        </div>
      </div>

      <!--fourth begins-->

      <div class="row gx-5 tc1">
        <div class="col-lg">
          <div class="row pt-5">
            <div class="col-md col-sm mt-3">
              <a
                class="text-white"
                href="https://anyswap.exchange"
                target="blank"
              >
                Powered by Anyswap
              </a>
            </div>
            <div class="col-lg-5 col-sm"></div>
            <div class="col-lg-2 col-sm">
              <button
                id="btn"
                type="button"
                class="btn btn-danger p-3"
                style="border-radius: 10px"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ConnectWallet from '~/components/ConnectWallet.vue';
import chains from '../web3/chains.json';
import Web3Service from '../web3/Web3Service';

export default {
  components: { ConnectWallet },
  data() {
    return {
      connectKey: 93,
      chains: [
        {
          chainId: '1',
          mainnet: 'Ethereum',
        },
        {
          chainId: '56',
          mainnet: 'BSC',
        },
        {
          chainId: '43114',
          mainnet: 'Avax',
        },
      ],
      connectKey: 43,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    selectedNetwork() {
      return this.$store.state.selectedNetwork;
    },
  },
  methods: {
    chooseNetwork() {
      const { user } = this;
      let selectedNetwork = chains.find(
        key => key.chainId === (user || {}).networkVersion,
      );

      if (!selectedNetwork) {
        selectedNetwork = chains[0];
      }

      this.$store.commit('set', {
        selectedNetwork,
      });

      this.$anyswap.getBridgeInfo(selectedNetwork.chainId);
    },
    async updateUser(data) {
      const walletBalance = await Web3Service.getWalletBalance(data.address);
      const balance = parseFloat(walletBalance).toFixed(8);

      this.$store.commit('set', {
        user: {
          ...data,
          balance,
          loggedIn: true,
        },
      });

      this.chooseNetwork();
    },
  },
  created() {
    this.chooseNetwork();
  },
};
</script>

<style scoped>
.box {
  background: rgba(236, 28, 28, 0.41);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(236, 28, 28, 0.43);
  border-radius: 10px;
}
</style>
