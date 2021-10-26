import store from '../../store'
import utilities from '../../utilities/helpers'

export const merchandiseMiddleware = {
  getMerchandiseByUserId: async (data) => {
    try {
      const response = await utilities.apiMethod(
        `merchandise/${data.user}`,
        'GET',
        null,
        null
      )
      store().commit(
        'merchandise/setMerchandise',
        response.data[0]._doc !== undefined
          ? [{ ...response.data[0]._doc }]
          : []
      )
    } catch (error) {}
  },
  getAllProductByUserAndMerchandiseId: async (data) => {
    try {
      const response = await utilities.apiMethod(
        `product/${data.user}&${data.merchandiseId}`,
        'GET',
        null,
        null
      )
      console.log(response)
      // store().commit('merchandise/setProduct', {})
    } catch (error) {}
  },
  getSingleProductById: async (data) => {
    try {
      store().commit('merchandise/setProduct', data)
    } catch (error) {}
  },
  createMerchandise: async (data, router) => {
    try {
      const response = await utilities.apiMethod(
        'merchandise/',
        'POST',
        { ...data },
        null
      )
      !response.isError && location.reload()
    } catch (error) {
      console.log(error)
    }
  },
}
