export default {
  namespaced: true,
  state: {
    isDrawerOpen: false,
    isMobileView: false,
    error: {
      message: '',
      isOpen: false,
    },
  },
  getters: {},
  mutations: {
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen
    },
    toggleMobileView(state, value) {
      state.isMobileView = value
    },
    errorMessage(state, data) {
      state.error = data
    },
  },
  actions: {},
}
