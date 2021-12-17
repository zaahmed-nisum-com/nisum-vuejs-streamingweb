import { data as data_ } from '../../data/json'
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
      data_.ordertTracking.push({
        id: Math.floor(Math.random() * 10000000),
        orderId: order.id,
        status: 'pending',
        createdDate: new Date(),
        details: {
          distination: '',
          currentPosition: '',
        },
      })
      console.log(data_.ordertTracking)
      data.router.replace('/myorders')
    },
  },
  actions: {},
}
