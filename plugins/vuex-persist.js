import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  new VuexPersistence({
    key: "c4g3.io",
    storage: localStorage,
  }).plugin(store);
};
