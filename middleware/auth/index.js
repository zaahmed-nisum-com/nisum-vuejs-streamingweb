import keys from '../../configurations/keys'
import store from '../../store'
import utilities from '../../utilities/helpers'

export const authMiddleware = {
  login: async (data, router) => {
    try {
      const response = await utilities.apiMethod(
        'auth/login',
        'POST',
        data,
        null
      )
      !response.isError &&
        store().commit('auth/login', { data: response.data, router })
    } catch (error) {
      console.log(error)
    }
  },
  signUp: async (data) => {
    try {
      const response = await utilities.apiMethod(
        'auth/signup',
        'POST',
        data,
        null
      )
    } catch (error) {
      console.log(error)
    }
  },
  refreshToken: async () => {},
}
