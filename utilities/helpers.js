export default helpers = {
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
  apiMethod: (method = 'GET', url, data = {}, params = {}) => {
    const options = {
      method,
    }
    try {
      if (method !== 'GET') {
        options.method = method
      }
    } catch (error) {
      console.log(error)
    }
  },
}
