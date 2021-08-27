<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion"
    data-scroll-to-active="true"
  >
    <div class="navbar-header mt-5 mb-3">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <nuxt-link class="navbar-brand" to="/dashboard">
            <div class="brand-logo d-flex w-100 justify-content-center">
              <img
                src="/img/logo.png"
                height="50"
                alt="logo"
                class="mr-2 rounded-circle"
              />
              <h2 class="text-dark mt-1">Cage</h2>
            </div>
          </nuxt-link>
        </li>
        <li class="nav-item nav-toggle">
          <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
            <i
              class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
            >
            </i>
          </a>
        </li>
      </ul>
    </div>

    <div class="shadow-bottom"></div>

    <div class="main-menu-content mt-5">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class="nav-item">
          <nuxt-link to="/dashboard">
            <i class="feather icon-home mx-2"></i>
            <span class="ml-2 menu-title">Dashboard</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/C4G3">
            <img
              src="/img/logo.png"
              height="35"
              alt="logo"
              class="mr-2 rounded-circle"
            />
            <span class="ml-2 menu-title">C4G3</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/cmi">
            <img
              src="/img/logo-cmi.png"
              height="35"
              alt="logo"
              class="mr-2 rounded-circle"
            />
            <span class="ml-2 menu-title">CMI</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-menu.menu-light .navigation > li {
  padding: 0 20px;
  margin-bottom: 15px;
}

.main-menu.menu-light .navigation > li a i {
  font-size: 20px;
}

.main-menu.menu-light
  .navigation
  > li
  a.nuxt-link-exact-active.nuxt-link-active {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 10px;
}
</style>
