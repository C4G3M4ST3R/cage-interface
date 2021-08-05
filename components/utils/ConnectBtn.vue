<template>
  <button
    data-toggle="collapse"
    data-target="#navbar-list-2"
    class="btn btn-outline-primary rounded-pill px-5 py-2"
    @click.prevent="connect"
    v-if="!isAuthenticated"
  >
    Explore pools
  </button>

  <div class="dropdown" v-else>
    <button
      @mouseover="onHover = true"
      @mouseout="onHover = false"
      class="btn btn-primary px-4 py-2 d-flex dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img :src="walletIcon" height="25" class="mr-2" />
      <span class="text-uppercase">{{ userAddress }}</span>
    </button>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <!-- <nuxt-link to="/academy?type=completed" class="dropdown-item">
        My Courses
      </nuxt-link> -->
      <a class="dropdown-item" href="#" @click.prevent="logout">Log out</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    onHover: false,
  }),
  computed: {
    walletIcon() {
      return this.user.wallet === 'metamask'
        ? '/img/connect/metamask-fox.svg'
        : this.onHover
        ? '/img/connect/walletconnect-logo.svg'
        : '/img/connect/walletconnect-logo-white.svg';
    },
    userAddress() {
      const { ethAddress: address } = this.user;
      const first5 = address?.slice(0, 5);
      const last4 = address?.slice(-4);

      return `${first5 || ''}....${last4 || ''}`;
    },
  },
};
</script>

<style scoped>
.show > .btn-primary.dropdown-toggle {
  background-color: var(--primary-color);
}

.dropdown-menu {
  width: 100%;
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: var(--primary-color);
}

.dropdown-toggle::after {
  position: relative;
  top: 10px;
}
</style>
