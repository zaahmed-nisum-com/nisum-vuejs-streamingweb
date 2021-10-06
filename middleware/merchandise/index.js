import store from '../../store'
import utilities from '../../utilities/helpers'

export const merchandiseMiddleware = {
  getAllMerchandiseById: async () => {
    console.log('getAllMerchandiseById')
    try {
      const response = await utilities.apiMethod(
        'merchandise/',
        'GET',
        null,
        null
      )
      console.log(response.data)
      store().commit('merchandise/setMerchandise', [])
    } catch (error) {}
  },
  getProductById: async () => {
    try {
      const response = await utilities.apiMethod(
        'merchandise/product/',
        'GET',
        null,
        null
      )
      store().commit('merchandise/setProduct', {})
    } catch (error) {}
  },
  createMerchandise: async (data) => {
    try {
      const response = await utilities.apiMethod(
        'merchandise/',
        'POST',
        { ...data },
        null
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  },
}
