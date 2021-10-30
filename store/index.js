export const state = () => ({
  user: {
    loggedIn: false,
  },
  selectedNetwork: null,
});

export const mutations = {
  set(state, data) {
    for (let key of Object.keys(data)) state[key] = data[key];
    console.log(data);
  },
};

export const getters = {
  isAuthenticated: state => state.user.loggedIn,
};
