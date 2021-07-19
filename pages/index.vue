<template>
  <main class="text-center py-3 py-lg-5">
    <header class="container">
      <div class="hero">
        <img :src="hero" />

        <h1 class="text-dark font-weight-bolder linear-wipe">
          Wealth creation
          <br class="d-none d-lg-block" />
          automated
        </h1>

        <p class="my-3 font-italic">
          Your path to
          <br class="d-block d-lg-none" />
          financial freedom
        </p>

        <nuxt-link to="/swap" type="button" class="btn btn-primary mt-4">
          <h5 class="mb-0">
            Get your coin
          </h5>
        </nuxt-link>

        <div class="w-75 mx-auto mt-5">
          <div class="row">
            <div class="col d-flex p-4">
              <img
                height="40"
                class="mr-3 mt-1"
                src="https://raw.githubusercontent.com/pie-dao/brand/2b47cee4fcc0fd814ff54e78ab9251345a521541/misc/hero-icon-2-black.svg"
                alt="PieDAO Hero"
              />
              <span class="">
                Set and forget strategies, maximum returns
              </span>
            </div>

            <div class="col d-flex p-4 mx-4">
              <img
                height="40"
                class="mr-3 mt-2"
                src="https://raw.githubusercontent.com/pie-dao/brand/2b47cee4fcc0fd814ff54e78ab9251345a521541/misc/hero-icon-1-black.svg"
                alt="PieDAO Hero"
              />
              <span class="mt-2">
                Diversified exposure to the best of crypto
              </span>
            </div>

            <div class="col d-flex p-4">
              <img
                height="40"
                class="mr-3 mt-2"
                src="https://raw.githubusercontent.com/pie-dao/brand/2b47cee4fcc0fd814ff54e78ab9251345a521541/misc/hero-icon-3-black.svg"
                alt="PieDAO Hero"
              />
              <span class="mt-2">
                Secure, transparent, and open-source
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="mx-5 mt-5 pt-5 px-5">
      <h2 class="font-italic">
        "A decentralized asset manager for tokenized portfolios, with a mission
        to bring automated wealth creation to everyone with an internet
        connection."
      </h2>

      <div class="row px-5 mx-5 mt-5">
        <template v-for="n in 6">
          <div class="col-lg-4" :key="n">
            <coin-card :isEven="n % 3 === 0" />
          </div>
        </template>
      </div>
    </section>

    <section class="mx-5 mt-5 pt-5 px-5">
      <h2>
        Bake Together, save 97% Gas.
      </h2>

      <div class="row px-5 mx-5 mt-5">
        <div class="col-lg-4">
          <div>
            <img
              height="75"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/cook_1f9d1-200d-1f373.png"
              alt="deposit eth"
            />
          </div>
          <h4 class="mt-1 mb-0">Deposit ETH</h4>
          <p class="mt-1">
            When at least 10 ETH is deposited the Oven can begin.
          </p>
        </div>

        <div class="col-lg-4">
          <div>
            <img
              height="75"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/timer-clock_23f2-fe0f.png"
              alt="deposit eth"
            />
          </div>
          <h4 class="mt-1 mb-0">Wait</h4>
          <p class="mt-1">
            Oven will bake when gas price is below 100 gwei, saving everyone
            money.
          </p>
        </div>

        <div class="col-lg-4">
          <div>
            <img
              height="75"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/pie_1f967.png"
              alt="deposit eth"
            />
          </div>
          <h4 class="mt-1 mb-0">Withdraw Your Pie</h4>
          <p class="mt-1">
            Once the Pie is baked you can withdraw it to your wallet.
          </p>
        </div>
      </div>

      <nuxt-link
        to="/swap"
        type="button"
        class="btn btn-primary btn-black mt-5"
      >
        <h5 class="mb-0">
          Oven
        </h5>
      </nuxt-link>
    </section>

    <section class="mx-5 mt-3 pt-5 px-5">
      <div class="card mx-5 p-5">
        <div class="card-content d-flex">
          <h2 class="mr-3 w-75 text-left">
            Pies are diversified portfolios of top
            <br class="d-none d-lg-block" />
            performing crypto assets
          </h2>

          <div>
            <ul class="text-left" style="list-style: none;">
              <li>
                ✔️ Carefully handpicked by a decentralized community of
                economically incentivised talent.
              </li>
              <li class="mt-3">
                ✔️ Maximize returns with active yield-generating strategies
                behind the scenes. Staking, lending, yield-farming - completely
                automated.
              </li>
              <li class="mt-3">
                ✔️ Accessible. Save 97% of the minting gas costs by using the
                community Oven
              </li>
              <li class="mt-3">
                ✔️ Secure architecture and fully audited contracts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-5 mt-5 pt-5 px-5 main">
      <div class="py-5">
        <h1>
          DOUGH
        </h1>
        <p>
          The engine behind PieDAO’s self-driving
          <br class="d-none d-lg-block" />
          wealth creation machine
        </p>

        <nuxt-link
          to="/swap"
          type="button"
          class="btn btn-primary btn-black mt-3"
        >
          <h5 class="mb-0">
            Get started
          </h5>
        </nuxt-link>
      </div>
    </section>

    <section class="mx-5 mt-5 py-5 px-5">
      <h2>
        "If you want to go fast, go alone."
        <br />
        "If you want to go far, DAO it together."
      </h2>

      <div
        class="d-flex justify-content-between justify-content-lg-center mt-5"
      >
        <p class="my-0">
          Our fast growing community includes top founders and developers of
          DeFi, join us!
        </p>

        <div class="badge py-3 px-4 rounded-pill mt-n3 ml-lg-3">
          <a href="https://pixinvent.com/" target="_blank" class="text-dark">
            <span class="font-weight-bold mr-1">+2233</span>
            members
          </a>
        </div>
      </div>

      <div class="container mt-4">
        <div class="row mx-lg-5">
          <template v-for="n in 4">
            <div class="col-12 col-lg-3 pl-0" :key="n">
              <div class="card member p-3">
                <a href="#">
                  <div class="card-content d-flex">
                    <img
                      src="https://pbs.twimg.com/profile_images/1250846427930075149/PW5lOu8T_400x400.jpg"
                      height="55"
                      class="rounded-circle"
                    />
                    <div class="ml-2 mt-2 text-left">
                      <h5 class="my-0 text-dark">cryptouf</h5>
                      <p class="my-0">Crusty AF</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </template>
        </div>

        <div class="d-flex justify-content-between mt-5 mx-lg-5 px-lg-5">
          <div>
            <template v-for="n in 4">
              <a href="#" :key="n">
                <img
                  src="https://pbs.twimg.com/profile_images/1223022968722415619/9DPgCQiP_400x400.jpg"
                  height="55"
                  class="rounded-circle mr-2"
                />
              </a>
            </template>
          </div>

          <div>
            <template v-for="n in 3">
              <a href="#" :key="n">
                <img
                  src="https://pbs.twimg.com/profile_images/1373979937141616640/cBoLdmuF_400x400.jpg"
                  height="55"
                  class="rounded-circle mr-2"
                />
              </a>
            </template>
          </div>

          <div>
            <template v-for="n in 2">
              <a href="#" :key="n">
                <img
                  src="https://pbs.twimg.com/profile_images/1229796883389984768/-51xkMj3_400x400.jpg"
                  height="55"
                  class="rounded-circle mr-2"
                />
              </a>
            </template>
          </div>
        </div>

        <div class="mt-4">
          <h3>Inside the bakery</h3>
          <p>
            Subscribe to our newsletter for latest performance updates and
            community news
          </p>

          <form class="flex-form">
            <input
              type="email"
              name="email"
              placeholder="Type your email…"
              id="email"
            />
            <button
              class="btn rightButton btn-primary subscribe-btn "
              type="submit"
              tabindex="0"
            >
              <b>Subscribe</b>
            </button>
          </form>

          <div class="text-right" style="position: relative">
            <a
              href="https://substack.com/?utm_source=embed&amp;utm_content=insidethebakery"
              target="_blank"
              class="substack-watermark"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-5 mt-5 py-5 px-5 press">
      <p>Press & Integrations</p>

      <div>
        <img
          class="w-75"
          src="https://raw.githubusercontent.com/pie-dao/brand/master/misc/integrations-desktop.png"
          alt="PieDAO Featured In"
        />
      </div>

      <div class="mt-5 pt-5">
        <p>Audited By</p>

        <div>
          <img
            class="w-75"
            src="https://raw.githubusercontent.com/pie-dao/brand/master/misc/auditslogos.png"
            alt="PieDAO Audited by"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CoinCard from '../components/cards/CoinCard.vue';
export default {
  components: { CoinCard },
};
</script>

<style scoped>
.hero > img {
  width: 70%;
}

section.main h1,
.hero h1 {
  font-size: 8rem;
  line-height: 7rem;
  letter-spacing: -0.4rem;
}

section.main p,
.hero p {
  font-size: 1.8rem;
  font-weight: 100;
}

.hero .col {
  background-color: rgba(0, 0, 0, 0.04);
  background-blend-mode: multiply;
  border-radius: 10px;
}

.hero .w-75 {
  width: 80% !important;
}

.hero .col span {
  line-height: 1.5rem;
  text-align: left;
  font-weight: 500;
  font-size: 1.3rem;
}

section h2 {
  font-size: 3rem;
  line-height: 3.5rem;
  color: #000;
}

section p {
  font-size: 1.2rem;
  color: #4d4d4d;
  font-weight: 100;
}

section > .card {
  border-radius: 8px;
  background: linear-gradient(
    24deg,
    rgba(219, 241, 255, 1) 0%,
    rgba(180, 219, 255, 1) 100%
  );
  box-shadow: none;
}

section > .card ul li {
  font-size: 16px;
}

section.main p {
  line-height: 2.5rem;
}

.badge {
  font-size: 1rem;
  background-color: #f7f7f7;
}

.card.member {
  box-shadow: none;
  background-color: #f7f7f7;
  border-radius: 12px;
  border: solid 0.5px #d1d1d1;
}

.flex-form {
  display: flex;
  justify-content: center;
}

.flex-form input[type='email'] {
  display: inline-block;
  padding: 10px;
  height: 54px;
  border: 1px solid var(--primary-color) !important;
  border-right-width: 0;
  border-radius: 5px 0 0 5px;
  font-size: 14px;
  line-height: 19px;
  -webkit-appearance: none;
}

.subscribe-btn {
  margin-top: 0;
  padding: 10px 22px;
  min-width: 132px;
  height: 54px;
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 0 5px 5px 0;
  font-size: 14px;
}

.substack-watermark {
  position: absolute;
  display: block;
  right: 15%;
  bottom: 0px;
  height: 17.19496309px;
  width: 100px;
  background-image: url('https://cdn.substack.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.black.png');
  -webkit-background-size: 100%;
  background-size: 100%;
  opacity: 0.3;
}

section.press p {
  font-size: 1.35rem;
}

section.press img {
  opacity: 0.5;
}
/* @media (min-width: 960px) {
  .hero img {
    width: 70%;
  }
}

@media (min-width: 768px) {
  .hero img {
    width: 90%;
  }
} */
</style>
