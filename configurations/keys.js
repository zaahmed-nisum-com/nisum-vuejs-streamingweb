import constants from './constants'

const keys = {
  baseURL: constants.baseURL,
}

if (process.env.enviroment === 'localhost') {
  keys.baseURL = constants.localBaseUrl
}

if (process.env.enviroment === 'development') {
  keys.baseURL = constants.developmentBaseUrl
}

if (process.env.enviroment === 'production') {
  keys.baseURL = constants.productionBaseUrl
}

export default keys
