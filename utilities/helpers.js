export default {
  fullName: (data) => {
    return data.firstName !== '' && data.lastName !== ''
      ? data.firstName + data.lastName
      : data.firstName !== '' && data.lastName == ''
      ? data.firstName
      : data.firstName == '' && data.lastName !== ''
      ? data.lastName
      : data.firstName + data.lastName
  },
  fullAlphabaticDate: () => {
    return new Date()
  },

  fullNumaricDate: () => {
    return new Date()
  },
  apiMethod: async (path, method, body, authorization, url) => {
    try {
      let apiUrl = url

      if (!apiUrl) {
        apiUrl = constants.BASE_URL + path
      }
      const headers = {}

      if (authorization) {
        headers.authorization = 'Bearer ' + authorization
      }

      if (method !== 'GET') {
        headers['Content-Type'] = 'application/json'
      }

      const options = {
        method,
        headers,
      }

      if (body) {
        options['body'] = JSON.stringify(body)
      }

      const response = await fetch(apiUrl, options)
      const json = await response.json()
      // console.log(json)
      if (response.status !== 200) {
        throw new Error(json.message)
      }

      return await json
    } catch (e) {
      throw e
    }
  },
}
