import { data as data_ } from '../../data/json'
export default {
  namespaced: true,
  state: {
    orderTracking: {},
  },
  getters: {
    getOrderTracking(state,id){
      try {
        console.log(id)
        console.log(data_)
        console.log(state)
      } catch (error) {
        
      }
    }
  },
  mutations: {
  
  },
  actions: {},
}
