<template>
  <main>
    <header class="hero pt-md-5 mx-lg-5 pb-5 px-5 mt-xl-5">
      <div class="row flex-lg-row-reverse">
        <div class="col-12 col-xl d-lg-none d-xl-block">
          <div class="hero-right text-center mt-lg-n5">
            <img src="/img/logo-cmi.png" />
          </div>
        </div>

        <div class="col-xl-7 col-12 px-0 px-lg-3">
          <div class="hero-left text-center text-lg-left py-lg-5">
            <h1 class="h1">
              The First Decentralized Meme Index, Transforming meme tokens to a
              token with store of value.
            </h1>
            <p>
              Gain Exposure to the top performing Meme token across the space.
            </p>

            <div class="mt-3 mt-md-5">
              <button class="btn btn-primary py-3 px-5 mr-md-3 rounded-pill">
                <h5 class="my-0">
                  How to Buy
                </h5>
              </button>
              <button
                class="btn btn-outline-primary py-3 px-5 mt-3 mt-md-0 rounded-pill"
              >
                <h5 class="my-0">
                  Read docs
                </h5>
              </button>

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

    <section id="ecosystem" class="p-4 p-lg-5 mb-lg-5 mx-lg-5">
      <!-- <div class="my-5 scroll-btn">
        <a href="#buy" class="d-none d-lg-block">
          <img src="https://shibatoken.com/images/hero-scroll-shape.svg" />
          <i class="feather icon-arrow-down"></i>
        </a>
      </div> -->

      <div class="row">
        <div class="col-lg-6 col-12 text-center text-lg-left mr-xl-5 pr-lg-5">
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

        <div class="col-lg-6 d-none d-lg-block d-xl-none">
          <div class="hero-right mt-lg-5">
            <img src="/img/logo-cmi.png" />
          </div>
        </div>

        <div class="col pt-3 pl-lg-0">
          <div class="eco-right d-md-flex justify-content-around mt-lg-5 pt-5">
            <template v-for="n in 3">
              <a :key="n" href="#">
                <div class="radiant"></div>
                <div
                  class="card rounded-20 mx-auto mb-md-0"
                  :class="{ 'mr-lg-3 mb-5': n < 3 }"
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

    <section class="mt-5 m-lg-5 p-4 p-lg-5">
      <div class="row">
        <template v-for="n in 3">
          <div class="col-lg-4 col-12 col-md-6" :key="n">
            <div class="card coin mb-4 rounded-20">
              <img
                class="card-img-top w-25 my-5 mx-auto"
                src="https://shibatoken.com/images/shiba_coin-1.png"
                alt="Card image cap"
              />
              <div class="card-body px-4 px-xl-5 bg-rgba-secondary">
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

    <section id="buy" class="mt-lg-5 pt-4 px-4 px-lg-5">
      <div class="row">
        <div class="col-xl-6 text-center text-xl-left col-12">
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
        <div class="col text-center ml-lg-5 pl-lg-5 mt-5">
          <img src="/img/logo-big.png" class="htb-circle-1" />

          <div class="circling-animation">
            <div class="circle first">
              <img src="https://shibatoken.com/images/gc1.png" />
            </div>

            <div class="circle second">
              <img src="https://shibatoken.com/images/gc2.png" />
            </div>

            <div class="circle third">
              <img src="https://shibatoken.com/images/gc4.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="start-guide" class="pb-4 px-4 px-lg-5">
      <div class="mt-5 text-center text-lg-left m-lg-5">
        <h2 class="h1">Quick Start Guide</h2>

        <div class="card rounded-20 bg-rgba-secondary p-3 p-lg-5">
          <div
            class="card-content text-center text-lg-left d-lg-flex justify-content-lg-left p-3"
          >
            <div>
              <div class="number text-white pt-4 text-center mx-auto mx-lg-0">
                <p class="my-0">
                  1
                </p>
              </div>
            </div>

            <div class="mt-4 pt-3 d-none d-lg-block">
              <div class="line"></div>
            </div>

            <div class="mt-3 pr-lg-5 mr-lg-5">
              <h3 class="h3 mb-3">
                Create MetaMask wallet
              </h3>
              <p>
                Create a MetaMask Wallet using either a desktop computer or an
                iOS/Android mobile device. That will allow you to buy, sell,
                send, and receive SHIB or LEASH.
              </p>
            </div>
          </div>

          <div
            class="card-content text-center text-lg-left d-lg-flex justify-content-lg-left p-3"
          >
            <div>
              <div class="number text-white pt-4 text-center mx-auto mx-lg-0">
                <p class="my-0">
                  2
                </p>
              </div>
            </div>

            <div class="mt-4 pt-3 d-none d-lg-block">
              <div class="line"></div>
            </div>

            <div class="mt-3 pr-lg-5 mr-lg-5">
              <h3 class="h3 mb-3">
                Send ETH to your wallet
              </h3>
              <p>
                You can buy Ethereum (ETH) directly on MetaMask or transfer it
                to your MetaMask Wallet from exchanges like Coinbase, Binance,
                etc. Make sure to use the ERC-20 network when transfering ETH.
              </p>
            </div>
          </div>

          <div
            class="card-content text-center text-lg-left d-lg-flex justify-content-lg-left p-3"
          >
            <div>
              <div class="number text-white pt-4 text-center mx-auto mx-lg-0">
                <p class="my-0">
                  3
                </p>
              </div>
            </div>

            <div class="mt-4 pt-3 d-none d-lg-block">
              <div class="line"></div>
            </div>

            <div class="mt-3 pr-lg-5 mr-lg-5">
              <h3 class="h3 mb-3">
                Connect your wallet to ShibaSwap
              </h3>
              <p>
                Access your wallet to ShibaSwap by clicking ‘Connect to a
                wallet’ and selecting MetaMask.
              </p>
            </div>
          </div>

          <div
            class="card-content text-center text-lg-left d-lg-flex justify-content-lg-left p-3"
          >
            <div>
              <div class="number text-white pt-4 text-center mx-auto mx-lg-0">
                <p class="my-0">
                  4
                </p>
              </div>
            </div>

            <div class="mt-4 pt-3 d-none d-lg-block">
              <div class="line"></div>
            </div>

            <div class="mt-3 pr-lg-5 mr-lg-5">
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
      </div>
    </section>

    <section id="swap" class="p-4 p-lg-5 m-lg-5">
      <div class="row">
        <div class="col-lg-6 col-12 mt-5 text-center">
          <div>
            <img
              src="https://shibatoken.com/images/ss-img2x.png"
              class="h-40"
            />
          </div>

          <div class="mt-5">
            <button class="btn btn-primary py-3 px-5 rounded-pill">
              <h5 class="my-0">
                Use ShibaSwap
              </h5>
            </button>
          </div>
        </div>

        <div class="col text-center text-lg-left mt-5 mt-lg-0">
          <h1 class="h1 mb-lg-5">
            ShibaSwap
          </h1>

          <div class="card rounded-lg bg-dark p-4">
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <img src="https://shibatoken.com/images/certik-logo.svg" />
              </div>

              <div class="ml-2 ml-lg-0">
                <button
                  class="btn btn-primary py-2 px-3 py-lg-3 px-lg-5 rounded-pill"
                >
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

    <section id="art" class="p-4 p-lg-5 bg-rgba-secondary text-center">
      <div class="mx-lg-5">
        <h2 class="h1">Art</h2>
        <p>
          We are proud to support ingenuity in all its forms with the
          <span class="font-weight-bold text-warning">Shiba Inu Incubator</span
          >. The ShibArmy is made up of talented individuals who have united to
          build something remarkable, and we support this by cultivating an
          environment which encourages creativity and growth. Through the power
          of the Shiba Inu Incubator, we help holders find the tools they need
          to bring their inspiration and unique perspectives to life. This as
          just another way to encourage others to step outside of preconceived
          limits and regulations and experience what it means to be part of our
          decentralized movement.
        </p>
      </div>
    </section>

    <div class="slide-show clearfix">
      <div id="slider">
        <div class="art-image">
          <img src="https://shibatoken.com/images/art1.png" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art2.png" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art3.jpg" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art4.png" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art5.jpg" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art7.jpg" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art8.jpg" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art11.jpg" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art9.png" />
          <div class="overlay"></div>
        </div>

        <div class="art-image">
          <img src="https://shibatoken.com/images/art10.png" />
          <div class="overlay"></div>
        </div>
      </div>

      <button class="btn btn-dark rounded-circle prevSlide">
        <i class="feather icon-chevron-left"></i>
      </button>

      <button class="btn btn-dark rounded-circle nextSlide">
        <i class="feather icon-chevron-right"></i>
      </button>
    </div>

    <section id="rescue" class="p-4 p-lg-5 m-lg-5">
      <div class="row">
        <div class="col-lg-6 col-12 text-center text-lg-left">
          <h2 class="h1">Rescue</h2>

          <p>
            From the tips of their noses to the ends of their tails, Shiba Inu
            are intelligent, brave, and independent, with an equal propensity
            for loyalty and mischief. Sadly, the characteristics which make them
            extraordinary are the same ones which make them a challenging pet.
            Inexperienced owners can find themselves unprepared for a dog that’s
            known for its bold (i.e. stubborn) personality.
          </p>

          <p>
            Luckily, we are helping these dogs in real life! We use

            <span class="font-weight-bold text-warning">Amazon Smile</span> to
            collect and donate a percentage of your Amazon purchases to the
            <span class="font-weight-bold">Shiba Inu Rescue Association</span>.
            Joining is easy and free! Just use
            <a class="font-weight-bold text-warning underline"
              >smile.amazon.com</a
            >
            when placing orders and select Shiba Inu Rescue Association (a
            501(c)3, preferred non-profit organization). You’re seconds away
            from helping Shibs in need. Start funding shelters today.
          </p>
        </div>
        <div class="col mt-lg-5 pt-lg-5">
          <div class="mt-lg-5 pt-lg-5 text-center">
            <button class="btn py-4 px-5 mt-3 mt-lg-5 rounded-10 btn-primary">
              <h2 class="my-2">Rescue Me</h2>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="community" class="p-4 p-lg-5 mt-3 mt-lg-0 bg-rgba-secondary">
      <div class="text-center mx-lg-5">
        <h2 class="h1">Community</h2>

        <p>
          If you'd like to donate to the
          <span class="font-weight-bold">Devs</span>, send
          <span class="text-warning font-weight-bold">ETH</span>,
          <span class="text-warning font-weight-bold">SHIB</span> or
          <span class="text-warning font-weight-bold">LEASH</span>
          here. Thank you for your support! WOOF!
        </p>

        <div class="card rounded-10 w-60 bg-dark mx-auto p-4">
          <div class="d-lg-flex justify-content-center">
            <div class="address mt-2 mr-3 text-white pt-1">
              0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
            </div>
            <div>
              <button
                class="px-4 btn-dark border-white font-weight-bold rounded-pill py-2"
              >
                <i class="feather icon-copy"></i>
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-4 p-lg-5 my-lg-5 text-center">
      <p>
        Our community grows stronger every day. Please follow our social
        platforms to get the most up-to-date, accurate SHIB information.
      </p>

      <p>
        Using the links below, you can join our various groups alongside the 1M+
        other members of the ShibArmy.
      </p>

      <div class="mb-3 mb-lg-5">
        <a href="#" class="font-weight-bold text-dark underline">
          Click here to search for your preferred country!
        </a>
      </div>

      <div class="row mx-lg-5 px-lg-5 social-links">
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img
                src="https://shibatoken.com/images/ico-tel.svg"
                height="50"
              />
            </div>
            <small class="text-dark">Shib Telegram</small>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img
                src="https://shibatoken.com/images/ico-tel.svg"
                height="50"
              />
            </div>
            <small class="text-dark">Leash Telegram</small>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img
                src="https://shibatoken.com/images/ico-tel.svg"
                height="50"
              />
            </div>
            <small class="text-dark">Bone Telegram</small>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img src="https://shibatoken.com/images/ico-tw.svg" height="50" />
            </div>
            <small class="text-dark">Twitter</small>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img
                src="https://shibatoken.com/images/ico-red.svg"
                height="50"
              />
            </div>
            <small class="text-dark">Reddit</small>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 col-md-4">
          <a href="#">
            <div class="mb-1 mb-lg-2 mt-3 mt-lg-0">
              <img
                src="https://shibatoken.com/images/ico-dis.svg"
                height="50"
              />
            </div>
            <small class="text-dark">Discord</small>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
    $('#slider')
      // .not('.slick-initialized')
      .slick({
        dots: false,
        // centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prevSlide'),
        nextArrow: $('.nextSlide'),
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1,
            },
          },
        ],
      });
  },
};
</script>

<style scoped>
@import url('~/assets/css/circling.css');

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

.hero .hero-right img {
  height: 500px;
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
  top: -25%;
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

.line {
  width: 80px;
  height: 2px;
  margin-right: 32px;
  margin-left: 32px;
  background-color: var(--primary-color);
}

.text-warning {
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

  .eco-right a:hover .radiant {
    display: none;
  }

  .hero .hero-right img {
    height: 200px;
  }

  .w-60 {
    width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .h-40 {
    height: 250px;
  }

  .hero .hero-right img,
  #ecosystem .hero-right img {
    height: 400px;
  }

  .w-60 {
    width: 75%;
  }
}
</style>
