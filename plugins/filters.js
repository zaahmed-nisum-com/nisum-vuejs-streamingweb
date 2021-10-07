import Vue from 'vue'

Vue.filter('nameConcate', (text, data) => {
  console.log('data=>', data)
  return data.firstName !== '' && data.lastName !== ''
    ? data.firstName + ' ' + data.lastName
    : data.firstName == '' && data.lastName !== ''
    ? data.lastName
    : data.firstName !== '' && data.lastName == ''
    ? data.firstName
    : data.firstName + ' ' + data.lastName
})
