import keys from '../../configurations/keys'
import store from '../../store'
import utilities from '../../utilities/helpers'

export const authMiddleware = {
  login: async (data) => {
    try {
      await utilities.apiMethod('auth/login', 'POST', data, null)
    } catch (error) {
      console.log(error)
    }
  },
  signUp: async (data) => {
    try {
      await utilities.apiMethod('auth/signup', 'POST', data, null)
    } catch (error) {
      console.log(error)
    }
  },
  refreshToken: async () => {},
}
