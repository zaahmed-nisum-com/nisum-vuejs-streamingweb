import keys from '../../configurations/keys'
import store from '../../store'
import utilities from '../../utilities/helpers'

export const authMiddleware = {
  login: async (data, router) => {
    try {
      // const response = await utilities.apiMethod(
      //   'auth/login',
      //   'POST',
      //   data,
      //   null
      // )
      // !response.isError &&
      if (data.email == 'za' && data.password == '123') {
        // store().commit('auth/login', { data: response.data, router })
        store().commit('auth/login', {
          data: [
            {
              email: 'zain.ahmed@gmail.com',
              firstName: 'Zain',
              lastName: 'Ahmed',
              token: 'oinef234hfhjwabfo34hfbqwerlgq3ht12h',
            },
          ],
          router,
        })
      }
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
