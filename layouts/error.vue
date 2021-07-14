<template>
  <section class="row flexbox-container">
    <div class="col-xl-7 col-md-8 col-12 d-flex justify-content-center">
      <div
        class="card auth-card bg-transparent shadow-none rounded-0 mb-0 w-100"
      >
        <div class="card-content">
          <div class="card-body text-center">
            <template v-if="!isServerError">
              <img
                src="/img/404.png"
                class="img-fluid align-self-center"
                alt="branding logo"
              />
              <h1 class="font-large-2 my-1">404 - Page Not Found!</h1>
              <p class="p-2">
                Oops, you got lost.
              </p>
            </template>
            <template v-else>
              <img
                src="/img/500.png"
                class="img-fluid align-self-center"
                alt="branding logo"
              />
              <h1 class="font-large-2 my-1">Internal Server Error!</h1>
              <p class="p-2">
                Oops, something broke.
              </p>
            </template>

            <nuxt-link to="/" class="btn btn-primary btn-lg mt-2">
              Back to Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  computed: {
    isServerError() {
      return this.$route.path.includes('500') || this.error.statusCode == 500;
    },
  },
};
</script>

<style scoped>
.flexbox-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.card {
  margin-bottom: 2.2rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.font-large-2 {
  font-size: 3rem !important;
}

p {
  line-height: 1.5rem;
}

.error-code {
  font-size: 10rem;
}
</style>
