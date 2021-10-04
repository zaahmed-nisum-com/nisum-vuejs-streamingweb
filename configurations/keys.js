import constants from './constants'

const keys = {
  baseURL: constants.localBaseUrl,
}

keys.NUXT_ENV_PAYPAL_KEY = process.env.NUXT_ENV_PAYPAL_KEY
keys.NUXT_ENV_STRIPE_KEY = process.env.NUXT_ENV_STRIPE_KEY
console.log('NUXT_ENV_MY_VARIABLE::', process.env.NUXT_ENV_MY_VARIABLE)

if (process.env.NUXT_ENV_enviroment === 'localhost') {
  keys.baseURL = constants.localBaseUrl
}

if (process.env.NUXT_ENV_enviroment === 'development') {
  keys.baseURL = constants.developmentBaseUrl
}

if (process.env.NUXT_ENV_enviroment === 'production') {
  keys.baseURL = constants.productionBaseUrl
}

export default keys
