<template>
  <div class="container">
    <div class="text-right">
      <button class="btn-grey px-4 py-2 text-white">
        Connect Wallet
      </button>
    </div>

    <div class="card shadow my-5 px-3 hero rounded-10">
      <div class="card-content d-flex justify-content-between p-5">
        <div>
          <h3 class="mb-3">
            Amplify your portfolio and
            <br />
            soar to new heights with Amun DeFi.
          </h3>
          <p>
            Connect your wallet and browse through our
            <br />
            strategies and purchase
          </p>
          <button class="btn-grey px-4 py-2 text-white">
            Connect Wallet
          </button>
        </div>
        <div></div>
      </div>
    </div>

    <div>
      <h4>Explore</h4>
      <p class="text-grey">
        Browse through various protocols and find the strategy
      </p>

      <div class="row mt-3">
        <div class="col-12 col-md-4">
          <a href="#">
            <div class="card first p-5 bg-primary">
              <svg
                width="137"
                height="105"
                viewBox="0 0 137 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="book"
              >
                <path
                  d="M134.203 7.84H130.923L132.304 10.039V93.518H68.5H4.661V10.004L6.042 7.806H2.7966C1.2429 7.806 0 9.062 0 10.632V95.508C0 97.078 1.2429 98.334 2.7966 98.334H59.834C60.87 102.173 64.357 105 68.5 105C72.643 105 76.13 102.173 77.166 98.334H134.203C135.757 98.334 137 97.078 137 95.508V10.667C137 9.097 135.757 7.84 134.203 7.84Z"
                  fill="#F27047"
                ></path>
                <path
                  d="M68.5 10.214L70.399 9.271C71.4 8.783 72.436 8.294 73.472 7.84H68.5H63.528C64.564 8.294 65.6 8.783 66.601 9.271L68.5 10.214Z"
                  fill="#F27047"
                ></path>
                <path
                  d="M4.66101 93.484H68.5H132.339V10.004L130.958 7.806L128.679 4.246V85.038C109.31 79.314 88.56 81.094 70.399 90.029L68.5 90.971V10.214V91.006L66.601 90.063C48.475 81.129 27.69 79.349 8.32101 85.073V4.281L6.04201 7.841L4.66101 10.039V93.484Z"
                  fill="#CCCCCC"
                ></path>
                <path
                  d="M8.32098 85.073C27.69 79.349 48.441 81.129 66.601 90.063L68.5 91.006V10.214L66.601 9.271C65.6 8.783 64.564 8.294 63.528 7.841C46.127 0.163 26.62 -1.09401 8.35599 4.28099L8.32098 85.073Z"
                  fill="#F2F2F2"
                ></path>
                <path
                  d="M68.5 10.214V91.006L70.399 90.063C70.399 48.079 90.182 8.399 108.516 1.035C96.57 0.651002 84.589 2.955 73.472 7.841C72.436 8.294 71.4 8.783 70.399 9.271L68.5 10.214Z"
                  fill="#E6E6E6"
                ></path>
                <path
                  d="M70.399 90.063C88.525 81.129 109.31 79.349 128.679 85.073V4.281C122.084 2.326 115.283 1.244 108.516 1.035C90.182 8.399 70.399 48.079 70.399 90.063Z"
                  fill="#F2F2F2"
                ></path>
              </svg>

              <h4 class="my-3 text-white">What is DeFi?</h4>
              <p class="text-white">
                Get educated on DeFi and the crypto space with our
                knowledgebase.
              </p>
              <div class="mt-3">
                <a
                  type="button"
                  href="#"
                  class="btn btn-outline-white border-white rounded-pill py-2 px-4"
                >
                  Read more
                </a>
              </div>
            </div>
          </a>
        </div>

        <template v-for="({ token, img }, i) in tokens">
          <div class="col-12 col-md-4" :key="i">
            <nuxt-link :to="`/${token}`">
              <div class="card other p-0">
                <div class="card-body px-4 py-4 text-center">
                  <div class="my-3">
                    <img :src="img" height="150" />
                  </div>
                  <div class="my-3 mx-4">
                    <h4 class="text-black">{{ token }}</h4>
                    <p class="text-grey mb-0">
                      Access the top eight DeFi tokens by market cap, all at
                      once.
                    </p>
                  </div>
                </div>
                <div class="card-footer px-5 py-3">
                  <nuxt-link
                    :to="`/${token}`"
                    type="button"
                    href="#"
                    class="btn btn-block bg-transparent"
                  >
                    View
                  </nuxt-link>
                </div>
              </div>
            </nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      tokens: [
        {
          token: 'C4G3',
          img: '/img/logo.png',
        },
        {
          token: 'CMI',
          img: '/img/logo-cmi.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-grey {
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 5px;
}

.btn-grey:hover {
  background-color: #7a8085 !important;
  box-shadow: 0 0 0 0.125em rgb(54 54 54 / 25%);
}

.hero {
  background-color: #edf1ff;
  background-image: url('https://tokens.amun.com/images/dashboard/ship.png');
  background-position: right 15px bottom -88px;
  background-repeat: no-repeat;
  background-size: 520px 530px;
}

.hero h3 {
  line-height: 1.5;
  font-weight: 600;
  font-size: 2rem;
}

.hero p {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

.hero img {
  height: 350px;
  position: absolute;
  right: 30px;
  top: -50px;
}

.btn-outline-white {
  font-weight: 500;
}

.card.first {
  box-shadow: none !important;
}

.card.other h4,
.card.first h4 {
  font-size: 1.5rem;
  font-weight: 400;
}

.card.other p,
.card.first p {
  line-height: 1.3;
  font-size: 1.15rem;
}

.card.first:hover .btn-outline-white {
  background-color: #fff;
  color: #363636;
}

.card.other .card-footer {
  border-top: 1px solid #f8f9fa;
  background: #f8f9fa;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.card.other .card-footer a {
  font-size: 1.25rem;
  color: #b5b5b5;
}

.card.other h4 {
  color: #000;
}

.card.other:hover {
  transform: translateY(-10px);
  transition: transform 0.25s ease;
}

.card.other:hover .card-footer {
  background-color: var(--primary-color) !important;
}

.card.other:hover .card-footer a {
  color: white;
}
</style>
