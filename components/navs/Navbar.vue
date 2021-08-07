<template>
  <nav
    class="navbar fixed-top navbar-dark navbar-expand-sm bg-white px-4 px-lg-5"
  >
    <div class="mx-lg-5 d-flex justify-content-between w-100">
      <nuxt-link to="/" class="navbar-brand d-flex">
        <img
          src="/img/logo.png"
          height="50"
          alt="logo"
          class="mr-2 rounded-circle"
        />
        <h2 class="text-dark mt-2">Cage</h2>
      </nuxt-link>

      <div class="mt-2">
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
          <ul class="navbar-nav text-center text-md-left">
            <li class="nav-item mt-1">
              <a class="nav-link" href="#ecosystem">
                Memeverse
              </a>
            </li>

            <li class="nav-item mt-1">
              <a
                type="button"
                class="dropdown-toggle bg-transparent nav-link"
                id="products"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                Products
              </a>

              <div
                class="actions dropdown-menu py-0 bg-transparent border-0"
                aria-labelledby="products"
              >
                <div class="card border-0 my-0 ml-1 shadow p-3">
                  <a href="#products" class="mb-3 pr-4">
                    C4G3
                  </a>
                  <a href="#products" class="pr-4">
                    CMI
                  </a>

                  <hr />
                  <nuxt-link
                    to="#!"
                    data-toggle="collapse"
                    data-target="#navbar-list-2"
                    class="pr-4"
                  >
                    🔀 Staking (Coming Soon)
                  </nuxt-link>
                </div>
              </div>
            </li>

            <li class="nav-item mt-1">
              <a class="nav-link" href="#swap">
                Index pool
              </a>
            </li>
            <li class="nav-item mt-1">
              <a class="nav-link" href="#art">
                Staking
              </a>
            </li>
            <li class="nav-item mr-0 mt-3 mt-md-0">
              <connect-btn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ConnectBtn from '../utils/ConnectBtn.vue';
export default {
  components: { ConnectBtn },
  methods: {
    scrollTo(hash) {
      const elem = document.querySelector(`section${hash}`);
      let offset = 50;
      window.scroll({
        top: elem.offsetTop - offset,
        left: 0,
        behavior: 'smooth',
      });
      // elem.scrollIntoView({
      //   behavior: 'smooth',
      // });
    },
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');

      if (window.scrollY > 10) {
        navbar.classList.add('shadow');
      } else {
        navbar.classList.remove('shadow');
      }
    });
  },
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
@media screen and (max-width: 768px) {
  .navbar .navbar-nav .nav-item {
    margin: 0;
  }

  .navbar .navbar-nav .nav-item:last-child {
    margin-left: 15px;
  }
}
</style>
