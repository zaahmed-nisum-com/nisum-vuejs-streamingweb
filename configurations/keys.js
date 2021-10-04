import constants from './constants'

const keys = {
  baseURL: constants.localBaseUrl,
}
keys.NUXT_ENV_PAYPAL_KEY = process.env.NUXT_ENV_PAYPAL_KEY
keys.NUXT_ENV_PAYPAL_KEY = process.env.NUXT_ENV_PAYPAL_KEY
console.log('ENV_ENVIRONMENT::', process.env.ENV_ENVIRONMENT)
console.log('NUXT_ENV_KEY::', NUXT_ENV_KEY)
if (process.env.ENV_ENVIRONMENT === 'localhost') {
  keys.baseURL = constants.localBaseUrl
}

if (process.env.ENV_ENVIRONMENT === 'development') {
  keys.baseURL = constants.developmentBaseUrl
}

if (process.env.ENV_ENVIRONMENT === 'production') {
  keys.baseURL = constants.productionBaseUrl
}

export default keys
