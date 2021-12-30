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
          <div class="row g-2 p-3 pb-4 box">
            <div class="col">
              <label for="depositAmount" class="form-label mb-0">
                Deposit
              </label>
              <input
                :class="{ error }"
                id="depositAmount"
                type="text"
                class="form-control text-center"
                placeholder="0.0"
                v-model="coinAmount"
                step=".00000001"
                aria-describedby="basic-addon1"
                autocomplete="off"
              />
              <span class="text-white" v-if="error">
                {{ errorMessage }}
              </span>
            </div>

            <div class="col-2"></div>

            <div class="col">
              <label for="fromChain" class="form-label mb-3">
                From chain
              </label>
              <select
                class="form-select select"
                id="fromChain"
                ref="fromChain"
                aria-label="Floating label select example"
                :value="fromChain"
                @change="switchChain"
              >
                <option disabled selected>- Select -</option>
                <template v-for="chain in chains">
                  <option :value="chain.chainId" :key="chain.chainId">
                    {{ chain.chainName }}
                    ({{ chain.nativeCurrency.symbol }})
                  </option>
                </template>
              </select>
            </div>
          </div>
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

          <div class="row g-2 p-3 pb-4 box">
            <div class="col">
              <label for="receiveAmount" class="form-label mb-0">
                Receive
              </label>
              <input
                id="receiveAmount"
                type="text"
                readonly
                class="form-control text-center"
                placeholder="0.0"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="col-2"></div>

            <div class="col">
              <label for="toChain" class="form-label mb-3"> To chain </label>
              <select
                class="form-select select"
                id="toChain"
                aria-label="Floating label select example"
                v-model="toChain"
              >
                <option disabled selected>- Select -</option>
                <template v-for="chain in formattedChains">
                  <option :value="chain.chainId" :key="chain.chainId">
                    {{ chain.chainName }}
                    ({{ chain.nativeCurrency.symbol }})
                  </option>
                </template>
              </select>
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
                Crosschain Fee is 0.1%, Minimum Crosschain Fee is 0.01 C4G3,
                Maximum Crosschain Fee is 0.1 C4G3
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
            <div class="col-lg-2 col-sm text-right">
              <button
                type="button"
                class="btn btn-danger p-3"
                :disabled="error || !amount"
                :class="{ shadow: !error && amount }"
                style="border-radius: 10px"
                :style="(error || !amount) && { cursor: 'not-allowed' }"
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
import mixin from '../plugins/mixin';
import Web3Service from '../web3/Web3Service';

export default {
  components: { ConnectWallet },
  mixins: [mixin],
  data() {
    return {
      connectKey: 43,
      // fromChain: null,
      toChain: null,
      amount: 0,
      loading: false,
    };
  },
  computed: {
    coinAmount: {
      get() {
        if (!this.amount) return '';
        return this.numberWithCommas(this.amount);
      },
      set(value) {
        let coinAmount = this.removeCommas(value);
        if (
          !this.validateNumbers(coinAmount) ||
          Number(coinAmount) > 1000000000
        ) {
          coinAmount = coinAmount.slice(0, -1);
        }
        this.amount = Number(coinAmount);
      },
    },
    user() {
      return this.$store.state.user;
    },
    selectedNetwork() {
      return this.$store.state.selectedNetwork;
    },
    formattedChains() {
      return this.chains.filter(
        key => key.chainId !== this.selectedNetwork.chainId,
      );
    },
    fromChain() {
      return this.selectedNetwork.chainId;
    },
    errorMessage() {
      const { coinAmount, amount, user } = this;

      if (amount > user.balance) return 'Insufficient balance';
      else if (coinAmount < 1681 || coinAmount > 421e6) {
        return 'Minimum amount is 1,681 C4G3 and the maximum amount is 421,000,000 C4G3';
      }
      return null;
    },
    error() {
      return this.amount && !!this.errorMessage;
    },
  },
  methods: {
    formatCrypto: amount =>
      amount ? parseFloat(amount).toFixed(8) : '0.00000000',
    async chooseNetwork() {
      const { user } = this;
      let selectedNetwork = this.chains.find(
        key => key.chainId === (user || {}).networkVersion,
      );

      if (!selectedNetwork) {
        selectedNetwork = this.chains[0];
      }

      this.$store.commit('set', {
        selectedNetwork,
      });
      this.toChain = this.formattedChains[0].chainId;

      const bridgeInfo = await this.$anyswap.getBridgeInfo(this.fromChain);

      console.log({ bridgeInfo });
      return;

      let p2pAddress = await this.$anyswap.registerAccount(
        this.user.address,
        this.fromChain,
        this.toChain,
      );

      //       isRegister: true
      // p2pAddress: "3DrML4Q1r8EDD6HW66aS1fHCyGGsH7kHRW"
    },
    switchChain(event) {
      this.toChain = null;
      const chain = this.chains.find(key => key.chainId === event.target.value);
      this.selectNetwork(chain);

      if (!this.user.loggedIn) {
        const fromChainSelect = this.$refs['fromChain'];
        fromChainSelect.selectedIndex = 0;
      }
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

.box .input-group-text,
.box .form-control {
  background: transparent;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #fff !important;
  outline: none !important;
  box-shadow: none !important;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 600;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}

.box .form-control.error {
  border-radius: 8px !important;
  border: 2px solid red !important;
}

.box .form-control::placeholder {
  color: #fff;
}
</style>
