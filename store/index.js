import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import auth from './auth/store'
import user from './user/store'
import admin from './admin/store'
import browse from './browse/store'
import category from './category/store'
import common from './common/store'
import subscription from './subscription/store'
import merchandise from './merchandise/store'
import cart_checkout from './cart-checkout/store'

Vue.use(Vuex)

const store = () =>
  new Store({
    modules: {
      auth,
      user,
      admin,
      browse,
      category,
      common,
      subscription,
      merchandise,
      cart_checkout,
    },
  })

export default store
