<template>
  <div class="modal" id="connectWallet" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content p-3 p-lg-5" style="border-radius: 10px">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          @click.prevent="closeModal"
          aria-label="Close"
        >
          <i class="feather icon-x" style="font-size: 22px"></i>
        </button>
        <div
          class="
            d-none d-md-block
            modal-header
            bg-transparent
            border-0
            ml-lg-5
            pl-lg-5
          "
        >
          <h4 class="text-primary">Select a Wallet to Continue</h4>
        </div>

        <div class="text-center">
          <p class="text-danger mb-0" v-if="errorMessage">
            {{ errorMessage }}
          </p>
          <p
            class="mb-0"
            v-if="(errorMessage || '').includes('MetaMask to continue')"
          >
            Or you can refresh this page to restart connection
          </p>
        </div>

        <div class="modal-body p-0 px-lg-3 py-lg-5">
          <div class="row my-3" v-if="!loading">
            <div class="col-12 col-md-6 text-center">
              <div class="wallet-img mx-auto">
                <img src="/img/connect/metamask.svg" @click="connectMetaMask" />
              </div>
            </div>

            <div class="col text-center mt-3 mt-lg-0">
              <div class="wallet-img mx-auto mt-2">
                <img
                  src="/img/connect/wallet-connect.png"
                  height="35"
                  @click="connectWalletConnect"
                />
              </div>
            </div>
          </div>
          <Loader class="py-5" v-else />
        </div>
        <div class="modal-footer d-none d-md-block border-0 ml-5 pl-5">
          <div
            class="float-right d-flex"
            v-if="errorMessage == notEnabledMessage"
          >
            <a class="text-green" href="#" @click="installMetaMask">
              <img
                src="/img/connect/metamask-fox.svg"
                class="rotate mr-2"
                height="20"
              />
              Install MetaMask
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue';
import MetaMaskOnboarding from '@metamask/onboarding';
import WalletConnectService from '../web3/wallet-connect';

export default {
  components: { Loader },
  data: () => ({
    loading: false,
    errorMessage: null,
    notEnabledMessage: 'MetaMask is not enabled',
    user: null,
  }),
  methods: {
    async installMetaMask() {
      this.loading = true;
      const onboarding = new MetaMaskOnboarding({});
      const res = await onboarding.startOnboarding();
      this.errorMessage = null;
      this.loading = false;
    },
    async connectMetaMask() {
      try {
        this.loading = true;
        const { ethereum } = window;

        // If check ethereum is installed or if metamaskl is not connected
        if (!ethereum || !ethereum.isMetaMask)
          throw new Error(this.notEnabledMessage);

        const { networkVersion, chainId, selectedAddress } = ethereum;

        if (!selectedAddress) {
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });

          const account = accounts[0];
          if (!account) throw new Error('Unable to retrieve accounts');

          this.setUser({
            address: account,
            wallet: 'metamask',
            network: this.networks[networkVersion],
            networkVersion,
            chainId,
          });

          this.closeModal();
          return;
        }

        this.setUser({
          address: selectedAddress,
          wallet: 'metamask',
          networkVersion,
          chainId,
        });
      } catch (e) {
        this.loading = false;
        let { message } = e;
        if (
          message.includes(
            `Request of type 'wallet_requestPermissions' already pending for origin`,
          )
        )
          return (this.errorMessage =
            'Please manually connect to MetaMask and complete registration');
        else if (
          message.includes(
            'Already processing eth_requestAccounts. Please wait',
          )
        ) {
          return (this.errorMessage =
            'Please manually login to MetaMask to continue');
        }

        this.errorMessage = e.message || 'An error occurred';
        console.log({ e });
      }
    },
    async connectWalletConnect() {
      const walletConnectService = new WalletConnectService();
      const response = await walletConnectService.init();
      console.log({ response });
    },
    setUser(data) {
      this.$emit('update', data);
      this.closeModal();
    },
    closeModal() {
      $('#connectWallet').modal('toggle');
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
#connectWallet .modal-dialog {
  z-index: 1041 !important;
}

#connectWallet .modal-content {
  /* background: rgba(255, 255, 255, 0.1); */
  box-shadow: 0 20px 50px rgb(0 0 0 / 15%);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.close {
  right: 10px;
  top: 5px;
  z-index: 9;
  background: #ffffff;
  padding: 0.2rem 0.62rem;
  border: none;
  /* box-shadow: 0 5px 20px 0 rgb(0 0 0 / 10%);
  border-radius: 0.357rem; */
  opacity: 1;
  -webkit-transition: all 0.23s ease 0.1s;
  transition: all 0.23s ease 0.1s;
  position: relative;
  -webkit-transform: translate(8px, -2px);
  -ms-transform: translate(8px, -2px);
  transform: translate(8px, -2px);

  margin: -1rem -1rem -1rem auto;
}

.wallet-img {
  cursor: pointer;
  border: 2px solid transparent;
  max-width: 200px;
}

/* .selected,
.wallet-img:hover {
  border-color: var(--primary-color);
} */

.rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.text-primary {
  color: rgb(236, 28, 28) !important;
}
</style>
