export default {
  namespaced: true,
  state: {
    cart: {},
    order: [],
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
    updateCart(state, data) {
      console.log(state)
      console.log(data)
      state.cart = { ...data }
    },
    placeOrder(state, data) {
      console.log(data)
      const order = {
        id: Math.floor(Math.random() * 10000000),
        orderItem: { ...data.orderCart },
        createdDate:new Date()
      }
      console.log(order)
      state.order.push(order)
      data.router.replace('/myorders');
    },
  },
  actions: {},
}
