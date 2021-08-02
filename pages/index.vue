<template>
  <main class="mx-5 px-5">
    <header class="hero pt-5 mt-5">
      <div class="row">
        <div class="col-lg-7 col-12">
          <div class="hero-left pt-lg-5">
            <h1 class="h1">
              A Decentralized Meme Token that Evolved into a Vibrant Ecosystem
            </h1>
            <p>
              SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The
              Shiba Incubator — And more. 585k+ Community Members and Growing
              Fast!
            </p>

            <div class="mt-5">
              <button class="btn btn-primary py-3 px-5 mr-3 rounded-pill">
                <h5 class="my-0">
                  How to Buy
                </h5>
              </button>
              <button class="btn btn-outline-primary py-3 px-5 rounded-pill">
                <h5 class="my-0">
                  Read Whitepaper
                </h5>
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="hero-right pt-lg-5">
            <img src="https://shibatoken.com/images/hero-shib.png" />
            <img
              src="https://shibatoken.com/images/moon.svg"
              class="hero--moon"
            />
          </div>
        </div>
      </div>

      <a href="#buy" class="scroll-btn mb-5">
        <img src="https://shibatoken.com/images/hero-scroll-shape.svg" />
        <i class="feather icon-arrow-down"></i>
      </a>
    </header>

    <section id="ecosystem" class="py-5 my-5">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h2 class="h1">
            Our Project & Ecosystem
          </h2>
          <p>
            From its inception, Shiba Inu has done things differently. Starting
            with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
            Uniswap, then “burned” the other half to Ethereum co-founder
            <span class="font-weight-bold">Vitalik Buterin</span> for
            safekeeping. <br /><br />
            To help reverse the devastating spread of Covid-19 in India, VB has
            since utilized SHIB in the largest crypto donation in history, and
            then
            <span class="font-weight-bold">actually</span> burned 40% of its
            total supply to a dead wallet, ensuring our long-term success and
            stability. In the words of Ryoshi, “Thank you to the woofmeister for
            enabling true decentralization. Now we truly begin.”
          </p>
        </div>

        <div class="col">
          <div class="eco-right d-flex justify-content-lg-around mt-5 pt-5">
            <template v-for="n in 3">
              <a :key="n" href="#">
                <div class="radiant"></div>
                <div
                  class="card rounded-20 mb-0 mt-3"
                  :class="{ 'mr-lg-4': n < 3 }"
                >
                  <div class="card-content">
                    <div class="text-center mb-3">
                      <img src="https://shibatoken.com/images/ico-uni.svg" />
                      <img
                        src="https://shibatoken.com/images/ico-uni-col.svg"
                        class="mx-auto"
                      />
                    </div>

                    <p class="text-white">
                      Liquidity Locked to Uniswap
                    </p>
                  </div>
                </div>
              </a>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5 py-5">
      <div class="row">
        <template v-for="n in 3">
          <div class="col-lg-4 col-12" :key="n">
            <div class="card coin mb-4 rounded-20">
              <img
                class="card-img-top w-25 my-5 mx-auto"
                src="https://shibatoken.com/images/shiba_coin-1.png"
                alt="Card image cap"
              />
              <div class="card-body px-5 bg-gradient-black">
                <div class="d-flex my-3">
                  <h3 class="h3 mr-3 mt-1">SHIB</h3>

                  <a
                    type="button"
                    href="#"
                    class="rounded-lg btn-dark px-2 py-1 mt-2"
                  >
                    <i class="feather icon-bar-chart-2 warning"></i>
                    See Live Charts
                  </a>
                </div>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="card-text">
                  Cookie topping caramels jujubes gingerbread. Lollipop apple
                  pie cupcake candy canes cookie ice cream. Wafer chocolate bar
                  carrot cake jelly-o.
                </p>

                <div class="text-left my-5">
                  <button class="btn btn-primary px-4 py-3 rounded-pill">
                    <h5 class="my-0">
                      Buy SHIB
                    </h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <section id="buy" class="my-5 py-5">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h2 class="h1">How to Buy</h2>
          <p>
            SHIB, LEASH and BONE are best purchased and sold through
            <span class="font-weight-bold">ShibaSwap</span>, but can also be
            found on Uniswap and an ever-growing list of CEXs. Please note that,
            outside of ShibaSwap, exchanges which support one may not support
            the other.<br /><br />SHIB is a decentralized experiment and, as
            such, we always incentivize the use of DEXs. If you choose to
            utilize a CEX instead, remember to research it first to ensure it is
            both safe and secure.
          </p>
        </div>
        <div class="col text-right">
          <img
            src="https://shibatoken.com/images/c1.png"
            loading="lazy"
            alt=""
            class="htb-circle-1"
          />

          <!-- <div class="circling-animation">
              <img
                class="circle-dashes"
                src="https://shibatoken.com/images/circle-dashes.svg"
              />
              <div>
                <img src="https://shibatoken.com/images/gc1.png" />
              </div>

              <div>
                <img src="https://shibatoken.com/images/gc2.png" />
              </div>

              <div>
                <img src="https://shibatoken.com/images/gc4.png" />
              </div>
            </div> -->
        </div>
      </div>
    </section>

    <section id="start-guide" class="py-5 my-5">
      <h2 class="h1">Quick Start Guide</h2>

      <div class="card rounded-20 p-5">
        <div class="card-content d-flex justify-content-lg-left p-3">
          <div>
            <div class="number text-white pt-4 text-center">
              <p class="my-0">
                1
              </p>
            </div>
          </div>

          <div class="mt-4 pt-3">
            <div class="yellow-line"></div>
          </div>

          <div class="mt-3 pr-5 mr-5">
            <h3 class="h3 mb-3">
              Create MetaMask wallet
            </h3>
            <p>
              Create a MetaMask Wallet using either a desktop computer or an
              iOS/Android mobile device. That will allow you to buy, sell, send,
              and receive SHIB or LEASH.
            </p>
          </div>
        </div>

        <div class="card-content d-flex justify-content-lg-left p-3">
          <div>
            <div class="number text-white pt-4 text-center">
              <p class="my-0">
                2
              </p>
            </div>
          </div>

          <div class="mt-4 pt-3">
            <div class="yellow-line"></div>
          </div>

          <div class="mt-3 pr-5 mr-5">
            <h3 class="h3 mb-3">
              Send ETH to your wallet
            </h3>
            <p>
              You can buy Ethereum (ETH) directly on MetaMask or transfer it to
              your MetaMask Wallet from exchanges like Coinbase, Binance, etc.
              Make sure to use the ERC-20 network when transfering ETH.
            </p>
          </div>
        </div>

        <div class="card-content d-flex justify-content-lg-left p-3">
          <div>
            <div class="number text-white pt-4 text-center">
              <p class="my-0">
                3
              </p>
            </div>
          </div>

          <div class="mt-4 pt-3">
            <div class="yellow-line"></div>
          </div>

          <div class="mt-3 pr-5 mr-5">
            <h3 class="h3 mb-3">
              Connect your wallet to ShibaSwap
            </h3>
            <p>
              Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’
              and selecting MetaMask.
            </p>
          </div>
        </div>

        <div class="card-content d-flex justify-content-lg-left p-3">
          <div>
            <div class="number text-white pt-4 text-center">
              <p class="my-0">
                4
              </p>
            </div>
          </div>

          <div class="mt-4 pt-3">
            <div class="yellow-line"></div>
          </div>

          <div class="mt-3 pr-5 mr-5">
            <h3 class="h3 mb-3">
              Swap ETH for SHIB, LEASH or BONE
            </h3>
            <p>
              You can start swapping as soon as you have ETH available! Press
              ‘Select a token’ and enter the token address or search for it on
              the tokens list.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 my-5">
      <div class="row">
        <div class="col-lg-6 col-12 mt-5">
          <img src="https://shibatoken.com/images/ss-img2x.png" class="h-50" />

          <div class="text-center mt-5">
            <button class="btn btn-primary py-3 px-5 rounded-pill">
              <h5 class="my-0">
                Use ShibaSwap
              </h5>
            </button>
          </div>
        </div>

        <div class="col text-left">
          <h1 class="h1 mb-5">
            ShibaSwap
          </h1>

          <div class="card rounded-lg bg-dark p-4">
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <img src="https://shibatoken.com/images/certik-logo.svg" />
              </div>

              <div>
                <button class="btn btn-primary py-3 px-5 rounded-pill">
                  <h5 class="my-0">
                    Audit Report
                  </h5>
                </button>
              </div>
            </div>
          </div>

          <p class="my-0">
            SHIB, LEASH, and BONE, come together to create
            <span class="warning">ShibaSwap</span>, the next evolution in DeFi
            platforms. ShibaSwap gives users the ability to
            <span class="font-weight-bold">DIG</span> (provide liquidity),
            <span class="font-weight-bold">BURY</span> (stake), and
            <span class="font-weight-bold">SWAP</span> tokens to gain
            <span class="font-weight-bold">WOOF Returns</span> through our
            sophisticated and innovative passive income reward system.<br /><br />Our
            platform also allows the ShibArmy to access upcoming NFTs and
            additional tools, such as portfolio trackers, to make navigating the
            crypto world simple and intuitive.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
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

.hero .hero-right .hero--moon {
  position: absolute;
  left: auto;
  top: -192px;
  right: -245px;
  bottom: auto;
  z-index: -1;
  width: 650px;
  max-width: none;
  -webkit-transition: width 300ms ease;
  transition: width 300ms ease;
}

.hero .scroll-btn {
  position: absolute;
  bottom: 0%;
  z-index: 2;
  left: 0;
}

.hero .scroll-btn i {
  position: absolute;
  left: 45px;
  top: 25px;
  color: #fff;
  font-size: 30px;
}

.hero .scroll-btn:hover i {
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

.eco-right a:hover .card img:first-child,
.eco-right a .card img:last-child {
  display: none;
}

.eco-right a:hover .radiant,
.eco-right a:hover .card img:last-child {
  display: block;
}

.eco-right a .radiant {
  background: radial-gradient(#ffffff, #9198e5);
  border-radius: 50%;
  height: 300px;
  width: 300px;
  top: -10%;
  left: -50px;
  filter: blur(1.5px);
  opacity: 0.6;
  position: absolute;
  display: none;
  z-index: -1;
  /* content: ' '; */
}

.eco-right a:hover .card {
  box-shadow: 0 0 200px 20px rgb(236 64 121 / 10%);
  box-shadow: none !important;
}

.card.coin .card-body {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.btn-dark {
  font-size: 14px;
}

.circling-animation div {
  animation: spinAround 15s linear infinite;
  position: absolute;
}

.circling-animation div {
  position: relative;
}

.circling {
  position: relative;
  width: 500px;
  height: 350px;
  display: grid;
  justify-content: center;
  align-content: center;
}

.circling > * {
  grid-column: 1;
  grid-row: 1;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg) translate(140px) scale(0.7);
  }
  to {
    transform: rotate(360deg) translate(140px) scale(0.7);
  }
}

.yellow-line {
  width: 80px;
  height: 2px;
  margin-right: 32px;
  margin-left: 32px;
  background-color: #f28b03;
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
</style>
