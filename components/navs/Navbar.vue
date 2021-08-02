<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-white px-4 px-lg-5 mt-2">
    <a href="/" class="navbar-brand px-lg-5">
      <img :src="logo" height="40" alt="logo" />
    </a>

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
      <ul class="navbar-nav text-center text-md-left pr-lg-4">
        <li class="nav-item mt-1">
          <a class="nav-link" href="#ecosystem">
            Ecosystem
          </a>
        </li>
        <li class="nav-item mt-1">
          <a class="nav-link" href="#buy">
            Buy
          </a>
        </li>
        <li class="nav-item mt-1">
          <a class="nav-link" href="#swap">
            Swap
          </a>
        </li>
        <li class="nav-item mt-1">
          <a class="nav-link" href="#art">
            Art
          </a>
        </li>
        <li class="nav-item mt-1">
          <a class="nav-link" href="#rescue">
            Rescue
          </a>
        </li>
        <li class="nav-item mt-1">
          <a class="nav-link" href="#community">
            Community
          </a>
        </li>
        <li class="nav-item mr-0">
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
