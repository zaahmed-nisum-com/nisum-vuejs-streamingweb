import keys from '../../configurations/keys'
import store from '../../store'

export const authMiddleware = {
  login: async (data) => {
    try {
      const response = await fetch(`${keys.baseURL + 'auth/login'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      })
      const res = await response.json()
      if (response.status === 200) {
      } else {
        store().commit('common/errorMessage', {
          message: res.message,
          isOpen: true,
        })
      }
    } catch (error) {}
  },
  signUp: async (data) => {
    try {
      const response = await fetch(`${keys.baseURL + 'auth/signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      })
      const res = await response.json()
      if (response.status === 200) {
      } else {
        store().commit('common/errorMessage', {
          message: res.message,
          isOpen: true,
        })
      }
    } catch (error) {}
  },
  refreshToken: async () => {},
}
