export const state = () => ({
  user: {
    loggedIn: false,
  },
  connectKey: 43,
});

export const mutations = {
  set(state, data) {
    for (let key of Object.keys(data)) state[key] = data[key];
    // console.log(data);
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.user.loggedIn;
  },
  assessmentOngoing: state =>
    state.assessment_test.Address === state.user.ethAddress &&
    !state.assessment_test.Passed,
};
