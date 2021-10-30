<template>
  <div class="_loading">
    <div class="_box">
      <div class="indicator">
        <!-- <img :src="loader" /> -->
        <div
          class="spinner-border"
          style="width: 3rem; height: 3rem"
          role="status"
        >
          <span class="sr-only d-none">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
._loading {
  position: relative;
  width: 100%;
  height: 100%;
}

._loading ._box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 5px;
}

._loading .indicator {
  /* width: 10px;
  height: 10px;
  background: #0f95e1;
  background-color: #0356ad;
  border-radius: 50%;
  margin: 0 auto 30px;
  animation: left-right 1s ease-in-out alternate-reverse infinite; */
}

.spinner-border {
  border: 0.25em solid rgb(236, 28, 28);
  border-right-color: transparent !important;
}

._loading .text {
  font-size: 1.3rem;
  /* opacity: 0.5; */
  text-align: center;
  font-weight: 700;
  /* color: #00ff6a; */
}

._loading small {
  font-size: 0.9rem;
  opacity: 0.6;
  margin-top: 10px;
  text-align: center;
}

@keyframes left-right {
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(10px);
  }
}

@media only screen and (min-width: 767px) {
  ._loading ._box {
    padding: 20px 5px;
  }
}
</style>
