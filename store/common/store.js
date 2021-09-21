export default {
  namespaced: true,
  state: {
    isDrawerOpen: false,
    isMobileView: false,
  },
  getters: {},
  mutations: {
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen
    },
    toggleMobileView(state, value) {
      state.isMobileView = value
    },
  },
  actions: {},
}
