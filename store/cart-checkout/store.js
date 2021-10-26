export default {
  namespaced: true,
  state: {
    cart: {},
  },
  getters: {},
  mutations: {
    addToCart(state, data) {
      console.log(data)
      if (state.cart.hasOwnProperty(data.itemId)) {
        state.cart[data.itemId].count++
      } else {
        state.cart[data.itemId] = { ...data, count: 1 }
      }
    },
    removeFromCart(state, data) {
      console.log(data)
    },
  },
  actions: {},
}
