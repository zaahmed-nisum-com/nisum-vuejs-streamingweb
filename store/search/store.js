export default {
  namespaced: true,
  state: {
    searchList: [],
  },
  getters: {},
  mutations: {
    setSearchList(state, data) {
      console.log(data)
      state.searchList = [...data]
    },
  },
  actions: {},
}
