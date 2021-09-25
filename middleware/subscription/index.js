import keys from '../../configurations/keys'
import store from '../../store'

export const subscriptionMiddleware = {
  getSubscriptionPlans: async () => {
    try {
      const response = await fetch(`${keys.baseURL + 'subscription'}`, {
        method: 'GET',
      })
      const res = await response.json()
      console.log(res)
      if (response.status === 200) {
        store().commit('subscription/setSubsciptions', res.data)
      } else {
        console.log(res.message)
      }
    } catch (error) {
      console.log({ error })
    }
  },
}
