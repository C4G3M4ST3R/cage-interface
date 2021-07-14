import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    key: 'scrate',
    storage: localStorage,
  }).plugin(store);
};
