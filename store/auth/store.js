export default {
  namespaced: true,
  state: {
    isLogin: false,
    token: '',
    auth: {},
  },
  getters: {},
  mutations: {
    login(state, data) {
      console.log(data)
      state.isLogin = true
      state.token = data.data[0].token
      state.auth = data.data[0]
      data.router.replace('/')
    },
    logout(state, data) {
      state.isLogin = false
      state.token = ''
      state.auth = {}
      data.router.replace('/login')
    },
  },
  actions: {},
}
