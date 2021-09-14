import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import auth from './auth/store'
import user from './user/store'
import admin from './admin/store'
import browse from './browse/store'
import category from './category/store'

Vue.use(Vuex)

const store = () =>
  new Store({
    modules: {
      auth,
      user,
      admin,
      browse,
      category,
    },
  })

export default store
