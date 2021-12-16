export default {
  namespaced: true,
  state: {
    cart: {},
    orders: [],
  },
  getters: {},
  mutations: {
    addToCart(state, data) {
      if (state.cart.hasOwnProperty(data.itemId)) {
        state.cart[data.itemId].count++
      } else {
        state.cart[data.itemId] = { ...data, count: 1 }
      }
    },
    updateCart(state, data) {
      state.cart = { ...data }
    },
    placeOrder(state, data) {
      const order = {
        id: Math.floor(Math.random() * 10000000),
        orderItem: { ...data.orderCart },
        createdDate: new Date(),
      }
      state.orders.push(order)
      data.router.replace('/myorders')
    },
  },
  actions: {},
}
