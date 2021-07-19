import Loader from '../components/utils/Loader.vue';
import { mapGetters, mapState } from 'vuex';
import Utils from './utils';
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
    ...Utils,
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
    showSuccess(text = '', title = '') {
      this.$toastr.s(title, text || '');
    },
    showError(text = '', title = '') {
      this.$toastr.e(title, text || '');
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
