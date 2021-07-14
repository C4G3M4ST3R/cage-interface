import Loader from '../components/utils/Loader.vue';
import { mapGetters, mapState } from 'vuex';
const logo =
  'https://raw.githubusercontent.com/pie-dao/brand/master/PieDAO%20Logo/PieDAO%20Complete%20Black.png';
const hero =
  'https://raw.githubusercontent.com/pie-dao/brand/d9481f58ba0550a9e7f5455cb93760783651f4e2/misc/hero-8.svg';

export default {
  data: () => ({
    logo,
    hero,
  }),
  components: {
    Loader,
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated', 'assessmentOngoing']),
    isAboutPage() {
      return this.$route.name === 'about-us';
    },
    isMobile() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];

      return toMatch.some(toMatchItem => {
        return navigator.userAgent.match(toMatchItem);
      });
    },
  },
  methods: {
    goBack() {
      if (!this.prevRoute || !this.prevRoute.name)
        return this.$router.push('/');
      this.$router.back();
    },
    catchErrors(e) {
      console.log({ e });
      const { response } = e;
      if (!response)
        return `There is a network issue. Please check your internet connection and try again`;

      if (response.status == 500) return this.$router.push('/500');

      const message = response.data;
      if (response.status === 404) return null;

      return message ? message.replace(/data:/g, '') : 'An error occured!';
    },
    thousandsFormatter: num =>
      !num
        ? 0
        : Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num),
    encrypt: str => {
      function generate() {
        let text = '';
        let possible =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 12; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
      const text = generate();

      return btoa(str) + text;
    },
    decrypt: str => {
      let lastIndex = str.lastIndexOf('=');
      const encrypted = str.slice(0, lastIndex + 1);
      if (process.client) return atob(encrypted);
    },
    getLink: link => link.toLowerCase().replace(/\s+/g, '-'),
    async getCourses() {
      try {
        const res = await this.$axios({
          url: `/courses`,
        });

        return res.data;
      } catch (err) {
        const msg = this.catchErrors(err);
        return {};
      }
    },
    async getArticles() {
      try {
        const res = await this.$axios({
          url: `/news`,
        });

        return res.data;
      } catch (err) {
        const msg = this.catchErrors(err);
        return {};
      }
    },
    async getAssessments() {
      const { ethAddress: address } = this.user;

      if (!address) return [];

      try {
        const res = await this.$axios({
          url: `/assessments/${address}`,
        });

        return res.data;
      } catch (err) {
        const msg = this.catchErrors(err);
        return [];
      }
    },
    showSuccess(text = '', title = '') {
      this.$toastr.s(title, text || '');
    },
    showError(text = '', title = '') {
      this.$toastr.e(title, text || '');
    },
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);

        this.showSuccess('Copied to clipboard!');
      } catch (err) {
        this.showError('This action could not be completed!');
      }
    },
    connect() {
      $('#connectWallet').modal({
        backdrop: 'static',
        keyboard: false,
      });
    },
    logout() {
      this.$store.commit('set', {
        user: {
          loggedIn: false,
        },
      });
    },
  },
};
