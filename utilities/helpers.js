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
      if (response.status !== 200) {
        throw new Error(json.message)
      }

      return await json
    } catch (e) {
      throw e
    }
  },

  imageLazyLoading: async () => {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
    let active = false
    if (active === false) {
      active = true
      setTimeout(() => {
        lazyImages.forEach(function (lazyImage) {
          if (
            lazyImage.getBoundingClientRect().top <= window.innerHeight &&
            lazyImage.getBoundingClientRect().bottom >= 0 &&
            getComputedStyle(lazyImage).display !== 'none'
          ) {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy')
            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage
            })

            if (lazyImages.length === 0) {
            }
          }
        })
        active = false
      }, 200)
    }
  },
}
