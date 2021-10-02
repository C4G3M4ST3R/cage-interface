<template>
  <header class="header-area">
    <div class="navbar-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg d-none">
              <img
                height="50px"
                width="50px"
                src="/img/images/lg.png"
                class="img-fluid"
                alt="logo"
              />
              <nuxt-link
                id="nov"
                style="
                    color: rgb(255, 255, 255);
                    font-size: 40px;
                    font-weight: bolder;
                  "
                class="navbar-brand"
                to="/"
              >
                CAGE
              </nuxt-link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="page-scroll" href="#home">Memeverse</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#features">Products</a>
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->

              <div class="navbar-btn d-none d-sm-inline-block">
                <a class="main-btn" data-scroll-nav="0" href="#dashboard"
                  >Dashboard</a
                >
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navbar area -->
    <div
      id="home"
      class="header-hero bg_cover"
      style="background-image: url(/img/images/banner-bg2.svg)"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="header-hero-content text-center">
              <div
                class="d-flex justify-content-center  wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <img src="/img/images/lg.png" class="img-fluid" alt="logo" />
                <h3
                  id="nov"
                  class="mt-4 ml-2"
                  style="
                    color: rgb(255, 255, 255);
                    font-size: 40px;
                    font-weight: bolder;
                  "
                >
                  CAGE
                </h3>
              </div>
              <h3
                class="header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                The First Decentralized Meme Index
              </h3>
              <h2
                class="header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                Transforming meme tokens to <br />
                a token with store of value.
              </h2>
              <p
                class="text wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                Gain Exposure to the top performing Meme token across the space
              </p>

              <div class="text-center">
                <button
                  class="main-btn main-btn-outlined wow fadeInUp py-2 px-4"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.25s"
                >
                  <div class="d-flex py-1">
                    <img
                      src="/img/logos/coinmarketcap-logo.png"
                      height="45"
                      class="mr-2"
                    />
                    <div class="text-left">
                      <h6 class="text-white my-0">
                        $C4G3
                        <span
                          :class="percentClass"
                          v-if="c4g3.percent_change_24h"
                        >
                          ({{ formatPercent(c4g3.percent_change_24h) }}%)
                        </span>
                      </h6>
                      <p class="text-white my-0">
                        Current Price:
                        <span class="font-weight-600">
                          {{ formatAmount(c4g3.price) }}
                        </span>
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <a
                style="margin-right: 20px;"
                href="#map"
                class="main-btn wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1.1s"
              >
                Road map
              </a>
              <a
                href="/doc/C4G3.Manual.pdf"
                class="main-btn wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1.1s"
              >
                Read manual
              </a>
            </div>
            <!-- header hero content -->
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-lg-12" style="height: 250px; width: 100px">
            <div
              class="header-hero-image text-center wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="1.4s"
            ></div>
            <!-- header hero image -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
      <div id="particles-1" class="particles"></div>
    </div>
    <!-- header hero -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      c4g3: {
        percent_change_24h: 0,
        price: 0,
      },
    };
  },
  computed: {
    percentClass() {
      const { percent_change_24h } = this.c4g3;
      return percent_change_24h > 0
        ? 'text-success'
        : percent_change_24h == 0
        ? 'text-white'
        : 'text-danger';
    },
  },
  methods: {
    formatPercent: amount =>
      Number(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
  },
  async mounted() {
    const { data } = await (
      await fetch(
        'https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=11968&convert_id=1,2781,2781',
      )
    ).json();

    const { price, percent_change_24h } = data['11968'].quote['2781'];
    console.log({ price, percent_change_24h });
    this.c4g3 = { price, percent_change_24h };
  },
};
</script>

<style scoped>
.main-btn {
  background: rgb(225, 100, 129);
  background: radial-gradient(
    circle,
    rgba(225, 100, 129, 1) 0%,
    rgba(250, 122, 122, 1) 100%
  );
}

.font-weight-600 {
  font-weight: 600;
}

.main-btn-outlined {
  border: 2px solid rgb(225, 100, 129);
  background: transparent !important;
}

.header-hero-content {
  padding-top: 120px;
  padding-bottom: 30px;
}

.d-flex .img-fluid {
  height: 100px;
}
</style>
