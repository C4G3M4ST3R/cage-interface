<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-white px-4 px-lg-5 mt-2">
    <nuxt-link to="/" class="navbar-brand px-lg-5 mx-lg-5">
      <img :src="logo" height="40" alt="logo" />
    </nuxt-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-list-2"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="feather icon-align-right"></i>
    </button>

    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbar-list-2"
    >
      <ul class="navbar-nav text-center text-md-left px-lg-5">
        <li class="nav-item mt-1">
          <nuxt-link
            class="nav-link"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            to="/"
          >
            Main
          </nuxt-link>
        </li>

        <li class="nav-item mt-1">
          <nuxt-link
            type="button"
            class="dropdown-toggle bg-transparent nav-link"
            id="products"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            to="#!"
          >
            Products
          </nuxt-link>

          <div
            class="actions dropdown-menu py-0 bg-transparent border-0"
            aria-labelledby="products"
          >
            <div class="card border-0 my-0 ml-1 shadow p-3">
              <nuxt-link
                to="/pies"
                data-toggle="collapse"
                data-target="#navbar-list-2"
                class="mb-3 pr-4"
              >
                🥧 Indices
              </nuxt-link>
              <nuxt-link
                to="/farms"
                data-toggle="collapse"
                data-target="#navbar-list-2"
                class="mb-3 pr-4"
              >
                🚜 Farms
              </nuxt-link>
              <nuxt-link
                to="/pies"
                data-toggle="collapse"
                data-target="#navbar-list-2"
                class="pr-4"
              >
                🔀 Exchange
              </nuxt-link>

              <hr />
              <nuxt-link
                to="/cage"
                data-toggle="collapse"
                data-target="#navbar-list-2"
                class="pr-4"
              >
                🟣 Cage
              </nuxt-link>
            </div>
          </div>
        </li>

        <li class="nav-item mt-1">
          <nuxt-link
            class="nav-link"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            to="/ndx"
          >
            Token
          </nuxt-link>
        </li>

        <li class="nav-item mt-1">
          <nuxt-link
            class="nav-link"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            to="/learn"
          >
            Learn
          </nuxt-link>
        </li>
        <li class="nav-item">
          <connect-btn />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ConnectBtn from '../utils/ConnectBtn.vue';
export default {
  components: { ConnectBtn },
};
</script>

<style scoped>
.navbar .navbar-toggler {
  background-color: var(--primary-color);
}
.navbar .navbar-toggler .feather {
  font-size: 30px;
  color: #ffffff;
}

a,
.navbar .navbar-nav .nav-link {
  color: #4f5665;
  font-size: 16px;
}

.navbar .navbar-nav .nav-item {
  margin: 0 15px;
}

.navbar button.btn-outline-primary {
  border-radius: 10px;
}

.dropdown-toggle::after {
  left: 0;
}

.dropdown-menu {
  left: unset;
  top: 50px;
}

@media screen and (max-width: 767px) {
  .navbar .navbar-nav .nav-link {
    border-bottom: 1px solid !important;
  }

  .navbar .navbar-nav .nav-item.active {
    background-color: var(--primary-color);
    border-bottom: none !important;
  }

  .navbar .navbar-nav .nav-item.active .nav-link {
    color: #ffffff;
  }

  .navbar .navbar-nav .nav-item {
    margin: 0 10px;
  }
}
</style>
