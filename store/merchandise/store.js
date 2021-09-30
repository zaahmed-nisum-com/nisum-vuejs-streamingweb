export default {
  namespaced: true,
  state: {
    merchandise: [],
    product: {},
  },
  getters: {},
  mutations: {
    setMerchandise(state, data) {
      state.merchandise = data
    },
    setProduct(state, data) {
      state.product = data
    },
  },
  actions: {},
}
