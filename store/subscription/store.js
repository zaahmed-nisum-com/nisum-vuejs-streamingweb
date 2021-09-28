export default {
  namespaced: true,
  state: {
    subscription: [],
  },
  getters: {},
  mutations: {
    setSubsciptions(state, data) {
      state.subscription = data
    },
    getAllSubscriptionPackges(state, data) {
      state.subscription = data
    },
  },
  actions: {},
}
