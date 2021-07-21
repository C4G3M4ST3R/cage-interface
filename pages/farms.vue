<template>
  <main class="mx-lg-5 p-lg-5">
    <div class="row pl-5 mr-2">
      <div class="col-12 col-lg-7">
        <div class="card rounded-20 mb-0">
          <div class="card-content p-4">
            <h2 class="my-3">Farm Pools</h2>

            <div v-if="loading" class="py-5 my-5">
              <div class="py-5 my-5">
                <Loader class="loader" />
              </div>
            </div>

            <template v-else>
              <template v-for="n in 5">
                <nuxt-link
                  to="/staking/coin"
                  :key="n"
                  class="bg-white rounded-20 p-4 rounded-lg d-flex justify-content-between text-dark"
                  :class="{ 'mb-3': n < 5 }"
                >
                  <div class="d-flex">
                    <div class="mr-5 pr-4 coins mt-n1">
                      <img
                        src="https://s3.amazonaws.com/token-icons/0x3845badade8e6dff049820680d1f14bd3903a5d0.png"
                        class="rounded-circle"
                        height="43"
                      />
                      <img
                        src="https://s3.amazonaws.com/token-icons/0xa1d6df714f91debf4e0802a542e13067f31b8262.png"
                        class="rounded-circle ml-n4"
                        height="43"
                      />
                    </div>

                    <div class="ml-2">
                      <h5 class="my-0">PLAY/DOUGH</h5>
                      <small>
                        20% Liquid - 80% Escrowed
                      </small>
                    </div>
                  </div>

                  <h5 class="mt-2 mb-0 font-weight-thin">Sushi</h5>
                </nuxt-link>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success text-center p-4 border-0 rounded-20">
          <h2>Farm Positions</h2>
          <p>Connect Web3 to see your positions</p>

          <img
            class="w-50 mx-auto"
            src="https://raw.githubusercontent.com/pie-dao/brand/master/misc/stakemoji.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style scoped>
.card {
  box-shadow: none;
  border: 2px solid var(--primary-color);
  background-color: #f7f7f7;
}

h2 {
  font-size: 2.8rem;
  line-height: 3.2rem;
}

h5 {
  font-size: 1.8rem;
  line-height: 1.5rem;
}

small {
  font-size: 1rem;
  font-weight: 100;
}

.coins {
  position: relative;
}

.coins img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}

.coins img:last-of-type {
  left: 40px;
  z-index: 1;
}

.bg-success {
  background-color: #b7f1e2 !important;
}

.bg-success img {
  height: 220px;
}

.loader >>> .spinner-border {
  width: 5rem !important;
  height: 5rem !important;
  border: 0.35em solid var(--primary-color);
}
</style>
