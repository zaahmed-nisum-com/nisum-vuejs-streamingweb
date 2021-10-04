import constants from './constants'

const keys = {
  baseURL: constants.localBaseUrl,
}
keys.PAYPAL_SANDBOX_KEY = process.env.PAYPAL_SANDBOX_KEY
console.log('ENVRIONEMENT::: ', process.env)
console.log('NUXT_ENV_MY_VARIABLE::', process.env.NUXT_ENV_MY_VARIABLE)
console.log('NUXT_ENV_MY_ENVIRONMENT::', process.env.NUXT_ENV_MY_ENVIRONMENT)
console.log(process.env.TEST_KEY)
console.log(process.env.HOST)
console.log(process.env.STRIPE_PUBLIC_DUMMY_KEY)
console.log(process.env.PAYPAL_SANDBOX_KEY)
console.log('key')
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
