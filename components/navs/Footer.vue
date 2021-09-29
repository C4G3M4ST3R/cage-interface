<template>
  <footer id="footer" class="footer-area pt-120">
    <div class="container">
      <div
        class="subscribe-area wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div id="accordion">
          <h3 style="color: #7C0808;">faQs</h3>
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style="color: #7C0808;"
                >
                  ‌Why should I buy C4G3 and CMI?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                The CMI combines the potential profitable gains from meme tokens with a proven strategy to invest - the index fund.
                In simple terms, our CMI allows investors to fully lock in profits that flow into the meme space, and at the same time minimises the risks that comes with investing in crypto.
                Importantly, not only does holding $C4G3 allow holders to govern the CMI, it also allows entry and participation in any future events that C4G3 will hold. 
                As the 20% of the portfolio of the CMI consists of $C4G3, it further provides value for holders of $C4G3

              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style="color: #7C0808;"
                >
                  How many % does C4G3 charge on each transaction?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Transaction fee doesn't exist here, C4G3 token isn't deflationary
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style="color: #7C0808;"
                >
                  What are the current tokens that make up the C4G3 Meme Index?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
               C4G3 - DOGECOIN - SHIBA INU - DOGELON - USDC.
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- FAQS area -->
      <div class="footer-widget pb-100">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div
              class="footer-about mt-50 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <a class="logo" href="#">
                <h1 style="color: white">Cage</h1>
              </a>
              <p class="text">
                The First Decentralized Meme Index Transforming meme tokens to a
                token with store of value.
              </p>
            </div>
            <!-- footer about -->
          </div>
          <div class="col-lg-5 col-md-7 col-sm-7">
            <div class="footer-link d-flex mt-50 justify-content-md-between">
              <div
                class="link-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div class="footer-title">
                  <h4 class="title">Quick Link</h4>
                </div>
                <ul class="link">
                  <li><a href="#map">Road Map</a></li>
                  <li><a href="#">Privacy Policy</a></li>

                  <li><a href="https://t.me/c4g3Index">Telegram</a></li>
                  <li>
                    <a
                      href="https://www.dextools.io/app/uniswap/pair-explorer/0xfe2743bcc93033d92c91f7998c44b112325c8ce2"
                    >
                      Dextools</a
                    >
                  </li>
                  <li><a href="https://t.me/cag3_Index">Announcements</a></li>

                  <li><a href="https://docs.cag3.io/">Docs</a></li>
                  <li><a href="https://github.com/C4G3M4ST3R">GitHub</a></li>
                </ul>
              </div>
              <!-- footer wrapper -->
              <div
                class="link-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div class="footer-title">
                  <h4 class="title">Resources</h4>
                </div>
                <ul class="link">
                  <li><a href="#">Home</a></li>
                  <li><a href="#home">Memeverse</a></li>
                  <li><a href="#features">Product</a></li>
                </ul>
              </div>
              <!-- footer wrapper -->
            </div>
            <!-- footer link -->
          </div>
          <div class="col-lg-3 col-md-5 col-sm-5">
            <div
              class="footer-contact mt-50 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div class="footer-title">
                <h4 class="title">Contact Us</h4>
              </div>
              <ul class="contact">
                <li>masters@cag3.io</li>
              </ul>
            </div>
            <!-- footer contact -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- footer widget -->
      <div class="footer-copyright">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright d-sm-flex justify-content-between">
              <div class="copyright-content">
                <p class="text">
                 Cage
                  <a href="#" rel="nofollow">{{year}}</a>
                </p>
              </div>
              <!-- copyright content -->
            </div>
            <!-- copyright -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- footer copyright -->
    </div>
    <!-- container -->
    <div id="particles-2"></div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  mounted() {
    // let script = document.createElement('script');
    // script.setAttribute('src', '/js/main.js');
    // document.head.appendChild(script);
  },
};
</script>
