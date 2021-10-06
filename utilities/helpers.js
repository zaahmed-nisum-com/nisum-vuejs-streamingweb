import keys from '../configurations/keys'
import store from '../store'

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

  apiMethod: async (path, method, body, authorizationToken) => {
    try {
      const apiUrl = keys.baseURL + path
      // console.log(env)
      const headers = {}

      if (authorizationToken) {
        headers.authorization = authorizationToken
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
        console.log(json)
        store().commit('common/errorMessage', {
          message: json.error.message,
          isOpen: true,
        })
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
