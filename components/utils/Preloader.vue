<template>
  <div class="preloader">
    <div class="loader">
      <video class="video w-100" autoplay muted>
        <source src="/img/loading.mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('video').on('ended', function() {
      console.log('Video has ended!');
      $('.preloader')
        .delay(500)
        .fadeOut(500);
    });
  },
};
</script>

<style scoped></style>
