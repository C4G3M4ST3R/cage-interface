<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container" style="width: 70%">
      <a class="navbar-brand text-white" href="https://cag3.io" target="_blank"
        ><img
          class="img-fluid"
          style="height: 50px; width: 50px"
          src="lg.png"
          alt=""
        />CAGE</a
      >
      <button
        id="nb"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link active text-white"
              aria-current="page"
              href="https://docs.cag3.io"
              target="_blank"
            >
              Cage Manual
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white"
              href="https://cageindex.netlify.app/"
              target="_blank"
            >
              Dashboard
            </a>
          </li>
        </ul>
        <form class="d-flex">
          <!-- Button trigger modal -->

          <div class="row">
            <div class="col-sm my-3" style="border-bottom: 10px">
              <button
                style="border-radius: 10px; border-bottom: 10px"
                type="button"
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#exampleModal"
                v-if="!!selectedNetwork"
              >
                {{
                  formatName(
                    selectedNetwork.chainName,
                    selectedNetwork.nativeCurrency.symbol,
                  )
                }}
              </button>

              <!-- Modal -->
              <div
                class="modal"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div
                    id="md"
                    class="modal-content d-flex justify-content-center"
                  >
                    <div class="modal-header col-12">
                      <h5
                        class="w-100 text-center center-block modal-title"
                        id="exampleModalLabel"
                      >
                        Select your network
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body mx-4 center-block">
                      <template v-for="network in chains">
                        <button
                          :key="network.chainId"
                          type="button"
                          :disabled="
                            checkSelected(network.nativeCurrency.symbol)
                          "
                          class="bu btn btn-danger"
                          @click.prevent="selectNetwork(network)"
                        >
                          {{
                            formatName(
                              network.chainName,
                              network.nativeCurrency.symbol,
                            )
                          }}
                        </button>
                      </template>
                    </div>

                    <div class="modal-footer center-block mx-5">
                      <div>
                        <p>Your MetaMask current network</p>

                        <li class="mx-3" v-if="selectedNetwork">
                          {{ selectedNetwork.chainName }} Mainnet
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm my-3">
              <button
                v-if="!$store.getters.isAuthenticated"
                id="b"
                style="border-radius: 10px; color: seashell"
                class="btn btn-outline-danger"
                @click.prevent="connect"
              >
                Connect
              </button>

              <button
                v-else
                style="border-radius: 10px; color: seashell"
                class="btn btn-outline-danger connect-btn"
                @mouseover="showOnHover = true"
                @mouseout="showOnHover = false"
                @click.prevent="logout"
                type="button"
              >
                <template v-if="showOnHover">Terminate</template>
                <div class="d-flex" v-else>
                  <img :src="walletIcon" height="22" class="mr-2" />
                  <span class="text-uppercase">{{ userAddress }}</span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import Web3Service from '../web3/Web3Service';
import chains from '../web3/chains.json';
export default {
  data() {
    return {
      chains,
      showOnHover: false,
    };
  },
  methods: {
    formatName: (name, symbol) =>
      symbol === 'BSC' ? 'BSC' : name.split(' ')[0],
    connect() {
      $('#connectWallet').modal();
    },
    checkSelected(symbol) {
      return (
        this.selectedNetwork &&
        this.selectedNetwork.nativeCurrency.symbol === symbol
      );
    },
    selectNetwork(network) {
      if (this.user.loggedIn) {
        const hexCode = Web3Service.convertStrToHex(network.chainId);
        network.chainId = hexCode;
        this.switchNetwork(network);
        return;
      }

      alert('Please connect to your Metamask wallet before switching!');
    },

    async switchNetwork(params) {
      const vm = this;

      function updateNetwork() {
        vm.$store.commit('set', {
          selectedNetwork: params,
        });
      }

      if (window.ethereum) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: params.chainId }],
          });

          updateNetwork();
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [params],
              });

              updateNetwork();
            } catch (addError) {
              console.error(addError);
              const { message } = addError;

              if (message.includes('pending')) {
                alert(
                  'Click on your Metamask extension icon and complete the pending transaction',
                );
              }
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html',
        );
      }
    },
    logout() {
      this.$store.commit('set', {
        user: {
          loggedIn: false,
        },
      });
    },
  },
  props: {
    user: Object,
    selectedNetwork: Object,
  },
  computed: {
    walletIcon() {
      return this.user.wallet === 'metamask'
        ? '/img/connect/metamask-fox.svg'
        : this.onHover
        ? '/img/connect/walletconnect-logo.svg'
        : '/img/connect/walletconnect-logo-white.svg';
    },
    userAddress() {
      const { address } = this.user;
      const first5 = address?.slice(0, 5);
      const last4 = address?.slice(-4);

      return `${first5 || ''}....${last4 || ''}`;
    },
  },
};
</script>

<style></style>
