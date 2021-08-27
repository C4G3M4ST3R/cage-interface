<template>
  <main>
    <div class="container">
      <div class="text-right">
        <button class="btn-grey px-4 py-2 text-white">
          Connect Wallet
        </button>
      </div>

      <nav
        aria-label="breadcrumbs"
        class="has-succeeds-separator breadcrumb border-0 my-5"
      >
        <ul>
          <li>
            <nuxt-link
              to="/dashboard"
              class="is-capitalized nuxt-link-active mr-2"
            >
              Dashboard
            </nuxt-link>
          </li>
          <li class="is-active text-uppercase text-black">
            {{ token }}
          </li>
        </ul>
      </nav>

      <div class="d-flex">
        <div class="mr-1">
          <img :src="`/img/tokens/${token.toLowerCase()}.png`" height="60" />
        </div>
        <div>
          <h4 class="text-capitalize mt-3">{{ token }}</h4>
          <p></p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9 col-12">
          <hr />
        </div>

        <div class="col px-0 mt-3">
          <div class="card p-4  other">
            <div class="card-content my-5 text-center">
              <div class="mb-5 mx-3">
                <h4>
                  You are not connected to your wallet.
                </h4>
                <p class="text-grey">
                  To purchase a token your wallet should be connected.
                </p>
              </div>

              <div>
                <button class="btn-grey px-5 py-2 text-white">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ params }) {
    const { token } = params;
    return { token };
  },
  layout: 'dashboard',
};
</script>

<style scoped>
.btn-grey {
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 5px;
}

.btn-grey:hover {
  background-color: #7a8085 !important;
  box-shadow: 0 0 0 0.125em rgb(54 54 54 / 25%);
}

nav {
  background: transparent;
  padding-left: 0;
  padding: 4px 16px;
  font-size: 1rem;
  white-space: nowrap;
}

.breadcrumb ol,
.breadcrumb ul {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.breadcrumb li {
  align-items: center;
  font-size: 16px;
  display: flex;
}

.breadcrumb.has-succeeds-separator li + li:before {
  content: '\e844';
  font: normal normal normal 16px/1 feather !important;
}

.breadcrumb li + li:before {
  color: #b5b5b5;
  content: '\0002f';
}
.breadcrumb li:before {
  position: relative;
  left: -4px;
  top: 0;
}

.breadcrumb li:first-child a {
  padding-left: 0;
}

.breadcrumb li a {
  font-size: 16px;
  color: #b5b5b5;
}

.text-black {
  color: #000;
}

.card.other h4,
.card.first h4 {
  font-size: 1.35rem;
  /* font-weight: 400; */
}

.card.other p,
.card.first p {
  line-height: 1.3;
  font-size: 1.15rem;
}

.card.other {
  background: linear-gradient(#fff 80%, #f2f2f3);
}
</style>
