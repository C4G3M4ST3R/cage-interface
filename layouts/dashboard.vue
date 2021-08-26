<template>
  <div>
    <Sidebar />

    <div
      class="app-content content"
      :class="{ 'ash-bg': $route.name === 'dashboard' }"
    >
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper mt-4">
        <div class="content-header row"></div>
        <div class="content-body pb-4">
          <Nuxt />
        </div>
      </div>
    </div>

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
  </div>
</template>
<script>
import Sidebar from '../components/navs/Sidebar.vue';

export default {
  components: { Sidebar },
};
</script>

<style scoped>
.app-content {
  min-height: 100vh;
  /* overflow: hidden auto; */
}

.ash-bg {
  background-color: #f7f8fb;
}
</style>
