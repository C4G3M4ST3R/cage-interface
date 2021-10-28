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
              >Dashboard</a
            >
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
              >
                Ethereum
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
                      <button id="btn" type="button" class="bu btn btn-danger">
                        Ethereum
                      </button>

                      <button id="btn" type="button" class="bu btn btn-danger">
                        Arbitrum
                      </button>

                      <button id="btn" type="button" class="bu btn btn-danger">
                        Bsc
                      </button>

                      <button id="btn" type="button" class="bu btn btn-danger">
                        Avalanche
                      </button>
                    </div>

                    <div class="modal-footer center-block mx-5">
                      <div>
                        <p>Your MetaMask current network</p>

                        <li class="mx-3">Ethereum Mainnet</li>
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
                class="btn btn-outline-danger d-flex"
                type="button"
              >
                <img :src="walletIcon" height="25" class="mr-2" />
                <span class="text-uppercase">{{ userAddress }}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    connect() {
      $("#connectWallet").modal();
    },
  },
  props: {
    user: Object,
  },
  computed: {
    walletIcon() {
      return this.user.wallet === "metamask"
        ? "/img/connect/metamask-fox.svg"
        : this.onHover
        ? "/img/connect/walletconnect-logo.svg"
        : "/img/connect/walletconnect-logo-white.svg";
    },
    userAddress() {
      const { address } = this.user;
      const first5 = address?.slice(0, 5);
      const last4 = address?.slice(-4);

      return `${first5 || ""}....${last4 || ""}`;
    },
  },
};
</script>

<style></style>
