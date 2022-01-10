import store from '../../store'

export const searchMiddleware = {
  searchProduct: async (queryParam) => {
    try {
      const response = await fetch(
        `https://streaming-app-server.herokuapp.com/search/product?q=${queryParam}`,
        {
          method: 'GET',
        }
      )
      const res = await response.json()
      if (response.status === 200) {
        store().commit('search/setSearchList', res.data)
        window.location.reload(true)
      } else {
        store().commit('search/setSearchList', [])
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
}
