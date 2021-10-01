import keys from '../../configurations/keys'
import store from '../../store'
import utilities from '../../utilities/helpers'

export const subscriptionMiddleware = {
  getSubscriptionPlans: async () => {
    try {
      const response = await utilities.apiMethod(
        'subscription/',
        'GET',
        null,
        null
      )
      store().commit('subscription/getAllSubscriptionPackges', response.data)
    } catch (error) {
      console.log({ error })
    }
  },
}
