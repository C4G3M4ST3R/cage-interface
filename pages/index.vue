<template>
  <main>
    <header class="hero pt-md-5 mx-lg-5 pb-5 px-5 mt-xl-5">
      <div class="row flex-lg-row-reverse">
        <div class="col-12 col-xl">
          <div class="hero-right text-center mt-5 mt-md-0 py-3 py-lg-0">
            <video class="w-100" muted autoplay loop>
              <source type="video/mp4" src="/img/animation.mp4" />
            </video>
          </div>
        </div>

        <div class="col-xl-6 col-12 px-0 px-lg-3">
          <div class="hero-left text-center text-xl-left py-lg-5">
            <h1 class="h1">
              The First Decentralized Meme Index Transforming meme tokens to a
              token with store of value.
            </h1>
            <p>
              Gain Exposure to the top performing Meme token across the space.
            </p>

            <div class="mt-3 mt-md-5">
              <button
                class="btn btn-primary py-3 px-5 mr-md-3 rounded-pill"
                @click="scrollTo('#roadmap')"
              >
                <h5 class="my-0">
                  Roadmap
                </h5>
              </button>
              <a
                type="button"
                href="/doc/C4G3.Manual.pdf"
                target="_blank"
                class="btn btn-outline-primary py-3 px-5 mt-3 mt-md-0 rounded-pill"
              >
                <h5 class="my-0">
                  Read Manual
                </h5>
              </a>

              <div class="mt-5 d-lg-none">
                <!-- <a href="#buy" class="scroll-btn">
                  <img
                    src="https://shibatoken.com/images/hero-scroll-shape.svg"
                  />
                  <i class="feather icon-arrow-down"></i>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="ecosystem" class="p-4 bg-rgba-secondary p-lg-5">
      <div class="row my-md-5 mx-lg-5">
        <div class="col-lg-6 col-12 text-center text-lg-left mr-xl-5 pr-lg-5">
          <h2 class="h1">
            Ecosystem
          </h2>
          <p>
            <span class="font-weight-bold">C4G3</span> (CAGE) will be the first
            of its kind. Our aim is to build around an existing protocol that
            has been accepted by the community, transforming from an ordinary
            meme to a meme with a store of value.<br /><br />

            The <span class="font-weight-bold">C4G3</span>
            ecosystem is a complete Index platform for meme tokens. The Meme
            Index portfolio includes top performing meme tokens in the
            cryptoverse with 20% equal weight.
          </p>
        </div>

        <div class="col-lg-6 d-none d-lg-block d-xl-none">
          <div class="hero-right mt-lg-5">
            <img src="/img/logo-cmi.png" />
          </div>
        </div>

        <div class="col pt-3 pl-lg-0">
          <div class="row eco-right mt-lg-5 pt-5">
            <div class="col-md-4 col-12">
              <a href="#" class="first flip">
                <div class="card rounded-20 mx-auto mb-md-0">
                  <div class="card-content">
                    <div class="front">
                      <div class="text-center mb-3">
                        <img
                          src="/img/illustrations/unicrypt.png"
                          height="100"
                        />
                      </div>

                      <p class="text-white">
                        Unicrypt Liquidity locked
                      </p>
                    </div>

                    <div class="back">
                      <span class="text-dark">
                        C4g3 liquidity locked via unicrypt.
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 col-12 my-3 my-md-0">
             <a target="_blank" href=" https://twitter.com/passorfailme/status/1430844629688127489" class="third">
                <div class="card rounded-20 mx-auto mb-md-0">
                  <div class="card-content">
                    <div class="text-center mb-3">
                      <img src="/img/illustrations/fire.png" height="100" />
                    </div>

                    <p class="text-white">
                      KYC Verified
                    </p>
                    <span class="text-dark">
                     The Cag3 team has been verified by passorfail.me 
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-4 col-12">
              <a target="_blank" href="https://solidity.finance/audits/CAGE/" class="third">
                <div class="card rounded-20 mx-auto mb-md-0">
                  <div class="card-content">
                    <div class="text-center mb-3">
                      <img src="/img/illustrations/shield.png" height="100" />
                    </div>

                    <p class="text-white">Contract Audit</p>
                    <span class="text-dark">
                      Click to view Audit report.
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="mt-5 m-lg-5 p-4 p-lg-5">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card coin mb-4 rounded-20">
            <img
              class="card-img-top w-25 my-5 mx-auto"
              src="/img/logo-big.png"
              alt="Card image cap"
            />
            <div class="card-body px-4 px-xl-5 bg-rgba-secondary">
              <div class="d-flex my-3">
                <h3 class="h3 mr-3 mt-1">
                  C4G3
                </h3>

                <a
                  type="button"
                  href="#"
                  class="rounded-lg d-none btn-dark px-2 py-1 mt-2"
                >
                  <i class="feather icon-bar-chart-2 warning"></i>
                  See Live Charts
                </a>
              </div>
              <p class="card-text">
                Our Memeverse is governed by C4G3 token and is placed among top
                performing meme assets in the space. C4G3 token holders will be
                able to create and vote on proposals in the community.
              </p>
              <p class="card-text">
                C4G3 aims to be the Meme token around which most memes revolve
                to generate high economic productivity for the ecosystem.
              </p>

              <div class="text-left my-5">
                <a
                  type="button"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xf2ef3551c1945a7218fc4ec0a75c9ecfdf012a4f"
                  target="_blank"
                  class="btn btn-primary px-4 py-3 rounded-pill"
                >
                  <h5 class="my-0">
                    Buy C4G3
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card coin mb-4 rounded-20">
            <img
              class="card-img-top w-25 my-5 mx-auto"
              src="/img/logo-cmi.png"
              alt="Card image cap"
            />
            <div class="card-body px-4 px-xl-5 bg-rgba-secondary">
              <div class="d-flex my-3">
                <h3 class="h3 mr-3 mt-1">CMI</h3>

                <a
                  type="button"
                  href="#"
                  class="rounded-lg d-none btn-dark px-2 py-1 mt-2"
                >
                  <i class="feather icon-bar-chart-2 warning"></i>
                  See Live Charts
                </a>
                <small class="mt-2">(Coming Soon)</small>
              </div>
              <p class="card-text">
                The Meme Index(CMI) is a digital asset or token designed to
                track the performance of five tokens; four top meme tokens and a
                stablecoin.
              </p>
              <p class="card-text">
                The meme index pool carries equal weight of the following
                tokens: C4G3, DOGE, SHIB, DOGELON, USDC.
              </p>

              <div class="text-left my-5">
                <button class="btn btn-primary px-4 py-3 rounded-pill" disabled>
                  <h5 class="my-0">
                    Buy CMI
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="mt-md-5 m-lg-5 p-4 p-lg-5">
      <h2 class="text-center h1 mb-5">Roadmap</h2>

      <div class="map">
        <div class="line d-none d-md-block"></div>

        <div class="row mx-auto done">
          <div class="col text-md-right pt-md-5 mt-md-5 pr-md-5">
            <p>Completed</p>
          </div>

          <div class="col-12 col-md-6 pl-md-5">
            <div class="phase first">
              <h3>PHASE I: LAUNCH‌</h3>
              <ul class="ml-3 pl-1">
                <li>Official announcement of C4G3 launch</li>
                <li>Release of CAG3 Manual (Whitepaper)</li>
                <li>Initial fund raise</li>
                <li>Website launch</li>
                <li>C4G3 Contract Audit</li>
                <li>C4G3 Contract deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mx-auto ongoing flex-row-reverse py-lg-5 my-lg-5">
          <div class="col text-left pt-md-5 mt-5 pl-md-5">
            <p>Ongoing</p>
          </div>

          <div class="col-12 col-md-6 pr-md-5">
            <div class="phase">
              <h3>PHASE II: SALE</h3>
              <ul class="ml-3 pl-1">
                <li>Public Sale</li>
                <li>Uniswap listing</li>
                <li>Sale distribution</li>
                <li>Marketing (This will be recurring)</li>
                <li>Coingecko & CMC Listing</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mx-auto py-lg-5 my-lg-5">
          <div class="col text-md-right pt-md-5 mt-5 pr-md-5">
            <!-- <p>March 7, 2021</p> -->
          </div>

          <div class="col-12 col-md-6 pl-md-5">
            <div class="phase">
              <h3>PHASE III: INDEX</h3>
              <ul class="ml-3 pl-1">
                <li>CMI Index dashboard</li>
                <li>CMI Contract Deployment</li>
                <li>CMI Contract Audit</li>
                <li>CMI Index Pool Deployment</li>
                <li>CMI Index Pool Contract Audit</li>
                <li>CMI ILO on Uniswap</li>
                <li>Coingecko & CMC listing</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mx-auto flex-row-reverse py-lg-5 my-lg-5">
          <div class="col text-left pt-md-5 mt-5 pl-md-5">
            <!-- <p>April 12, 2021</p> -->
          </div>

          <div class="col-12 col-md-6 pr-md-5">
            <div class="phase">
              <h3>PHASE IV: STAKING</h3>
              <ul class="ml-3 pl-1">
                <li>Launch of Staking Dashboard</li>
                <li>Deployment of Staking Contract</li>
                <li>Staking Contract Audit</li>
                <li>Launching of CAG3 MASTERS (NFT)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mx-auto py-lg-5 my-lg-5">
          <div class="col text-md-right pt-md-5 mt-5 pr-md-5">
            <!-- <p>May 21, 2021</p> -->
          </div>

          <div class="col-12 col-md-6 pl-md-5">
            <div class="phase">
              <h3>PHASE V: GOVERNANCE</h3>
              <ul class="ml-3 pl-1">
                <li>Governance</li>
                <li>Ecosystem Development</li>
                <li>Website revamp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="p-4 p-lg-5 bg-rgba-secondary">
      <div class="m-lg-5">
        <h2 class="text-center h1 mb-3 mb-lg-5">FAQs</h2>
        <div
          id="accordion"
          class="mx-auto w-60"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="card mb-0">
            <div
              class="card-header py-3 bg-danger rounded-lg"
              role="tab"
              id="headingOne"
            >
              <div
                aria-expanded="false"
                aria-controls="collapseOne"
                class="collapsed d-flex justify-content-between w-100"
                data-toggle="collapse"
                href="#collapseOne"
                data-parent="#accordion"
              >
                <div class="mt-2">
                  <h4 class="mb-0 text-white">
                    ‌Why should I buy C4G3 and CMI?
                  </h4>
                </div>

                <div class="mt-2 pt-1">
                  <i class="feather icon-chevron-down text-white"></i>
                  <i class="feather icon-chevron-up text-white"></i>
                </div>
              </div>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              role="tabpanel"
              aria-labelledby="headingOne"
              aria-expanded="false"
            >
              <div class="card-block">
                <div class="px-4 py-3">
                  <p class="my-0">
                    C4G3 can be used to govern the platform, participate in any
                    future events and CMI gives holders exposure to the index
                    pool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card my-4">
            <div
              class="card-header py-3 bg-danger rounded-lg"
              role="tab"
              id="headingTwo"
            >
              <div
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="collapsed d-flex justify-content-between w-100"
                data-toggle="collapse"
                href="#collapseTwo"
                data-parent="#accordion"
              >
                <div class="mt-2">
                  <h4 class="mb-0 text-white">
                    What are the current tokens that make up the C4G3 Meme
                    Index?
                  </h4>
                </div>

                <div class="mt-2 pt-1">
                  <i class="feather icon-chevron-down text-white"></i>
                  <i class="feather icon-chevron-up text-white"></i>
                </div>
              </div>
            </div>

            <div
              id="collapseTwo"
              class="collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
              aria-expanded="false"
            >
              <div class="card-block">
                <div class="px-4 py-3">
                  <p class="my-0">
                    C4G3 - DOGECOIN - SHIBA INU - DOGELON - USDC.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-0">
            <div
              class="card-header py-3 bg-danger rounded-lg"
              role="tab"
              id="headingThree"
            >
              <div
                aria-expanded="false"
                aria-controls="collapseThree"
                class="collapsed d-flex justify-content-between w-100"
                data-toggle="collapse"
                href="#collapseThree"
                data-parent="#accordion"
              >
                <div class="mt-2">
                  <h4 class="mb-0 text-white">
                    How many % does C4G3 charge on each transaction?
                  </h4>
                </div>

                <div class="mt-2 pt-1">
                  <i class="feather icon-chevron-down text-white"></i>
                  <i class="feather icon-chevron-up text-white"></i>
                </div>
              </div>
            </div>

            <div
              id="collapseThree"
              class="collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
              aria-expanded="false"
            >
              <div class="card-block">
                <div class="px-4 py-3">
                  <p class="my-0">
                    Transaction fee doesn't exist here, C4G3 token isn't
                    deflationary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <button
      class="floating-btn btn btn-primary shadow rounded-circle"
      title="Go to top"
      @click="scrollToTop"
    >
      <i class="feather icon-chevron-up text-white"></i>
    </button>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      $('.floating-btn').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      const floatingBtn = document.querySelector('.floating-btn');

      if (window.scrollY > header.offsetTop + header.offsetHeight) {
        floatingBtn.style.display = 'block';
      } else {
        floatingBtn.style.display = 'none';
      }
    });
  },
};
</script>

<style scoped>
.floating-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: none;
  font-size: 26px !important;
}

p {
  /* color: #bbbbbe; */
}
/* Hero Section */
.hero {
  position: relative;
}

.h1 {
  margin-top: 0px;
  margin-bottom: 32px;
  font-size: 2.5rem;
  font-size: 48px;
  line-height: 66px;
}

.h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 42px;
}

.hero .hero-left p {
  font-size: 20px;
}

.hero .hero-right {
  position: relative;
  /* z-index: 2; */
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.hero .hero-right video {
  max-width: 50vw;
}

section#ecosystem {
  position: relative;
}

section#ecosystem .scroll-btn {
  position: absolute;
  /* bottom: -15%; */
  z-index: 2;
  top: 0;
}

section#ecosystem .scroll-btn i {
  position: absolute;
  left: 45px;
  top: 25px;
  color: #fff;
  font-size: 30px;
}

section#ecosystem .scroll-btn:hover i {
  top: 30px;
}

.eco-right a {
  position: relative;
}

.eco-right a .card {
  background-color: #18171f;
  width: 200px;
  height: 200px;
  -webkit-box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 8px 2px 0px rgba(0, 0, 0, 0.75) !important;
  /* box-shadow: 0 0 200px 20px rgb(236 64 121 / 10%); */
}

.eco-right a .card .card-content {
  padding: 15px;
  text-align: center;
}

.eco-right a .card .card-content p:first-child {
  line-height: 24px;
}

.eco-right a:hover .card {
  box-shadow: none !important;
  border: 5px solid transparent;
}

.eco-right a:hover .card .text-center,
.eco-right a:hover .card p.text-white,
.eco-right a .card span.text-dark {
  display: none;
}

.eco-right a:hover .card span.text-dark {
  -webkit-transition: 0.35s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  display: block;
}

.eco-right a.first:hover .card {
  border-color: #00da72;
  background-color: #00da72;
}

.eco-right a.second:hover .card {
  border-color: #ff9500;
  background-color: #ff9500;
}

.eco-right a.third:hover .card {
  border-color: #f4d99e;
  background-color: #f4d99e;
}

.eco-right a.first:hover .card p,
.eco-right a.third:hover .card p {
  color: #333 !important;
}

.card.coin .card-body {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.btn-dark {
  font-size: 14px;
}

/* .line {
  width: 80px;
  height: 2px;
  margin-right: 32px;
  margin-left: 32px;
  background-color: var(--primary-color);
} */

.text-primary {
  color: var(--primary-color) !important;
}

#start-guide {
}

#start-guide .card-content div.number {
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: #23212c;
  font-size: 24px;
  line-height: 42px;
  font-weight: 300;
}

.h-40 {
  height: 350px;
}

.art-image {
  width: 100% !important;
  position: relative;
  max-width: 320px;
  height: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}

.art-image:hover .overlay {
  display: none;
}

.art-image img {
  width: 100%;
  height: 100%;
}

.art-image.slick-slide.slick-cloned {
  /* display: none; */
}

.slide-show {
  position: relative;
}

.slide-actions {
  width: 100%;
}

button.prevSlide,
button.nextSlide {
  position: absolute;
  top: 20%;
  padding: 15px;
}

button.prevSlide {
  left: 30px;
}

button.nextSlide {
  right: 30px;
}

button.prevSlide i,
button.nextSlide i {
  font-size: 30px;
}

.underline {
  text-decoration: underline !important;
}

.address {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  /* max-width: 50%; */
}

.w-60 {
  width: 60%;
}

.social-links a:hover img {
  transform: scale(1.1);
}

.htb-circle-1 {
  height: 60%;
}

.card.coin {
  width: 500px;
  margin: 0 auto;
}

#accordion .i {
  font-size: 20px;
}

#accordion .card-header .d-flex {
  cursor: pointer;
}

#accordion .card-header .d-flex .icon-chevron-up,
#accordion .card-header .d-flex.collapsed .icon-chevron-down {
  display: block;
}

#accordion .card-header .d-flex .icon-chevron-down,
#accordion .card-header .d-flex.collapsed .icon-chevron-up {
  display: none;
}

#roadmap .map {
  width: 50%;
  position: relative;
  margin: 0 auto;
}

#roadmap .col::after {
  content: ' ';
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ea5455;
  top: 45px;
  border: 3px solid #c4c4c4;
  right: -15px;
}

#roadmap .done .col::after {
  background-color: #28c76f !important;
}

#roadmap .ongoing .col::after {
  background-color: yellow !important;
}

#roadmap .flex-row-reverse .col::after {
  right: auto;
  left: -10px;
}

#roadmap .line {
  border-left: 5px solid #bdbec0;
  height: 94%;
  position: absolute;
  left: 50%;
  top: 0;
}

@media screen and (max-width: 767px) {
  .h1 {
    font-size: 36px;
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 42px;
  }

  .hero .hero-left p {
    font-size: 16px;
    line-height: 28px;
  }

  .scroll-btn {
    position: relative !important;
  }

  .hero .scroll-btn i {
    top: 5px;
    font-size: 26px;
  }

  .h-40 {
    height: 200px;
  }

  #start-guide .card-content div.number {
    width: 50px;
    height: 50px;
    font-size: 18px;
    line-height: 10px;
  }

  .hero .hero-right {
    height: 200px;
  }

  #roadmap .map,
  .card.coin,
  .w-60 {
    width: 100%;
  }

  .floating-btn {
    bottom: 45px;
    right: 15px;
  }

  #roadmap .col::after {
    display: none;
  }

  .hero .hero-right video {
    max-width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .hero .hero-right video {
    max-width: 100%;
    height: 100%;
  }

  .h-40 {
    height: 250px;
  }

  .hero .hero-right,
  #ecosystem .hero-right img {
    height: 400px;
  }

  .w-60 {
    width: 75%;
  }

  #roadmap .map,
  .card.coin {
    width: 100%;
  }

  #roadmap .line {
    height: 95%;
  }
}
</style>
