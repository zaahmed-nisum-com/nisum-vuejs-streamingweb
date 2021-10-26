export default {
  namespaced: true,
  state: {
    merchandise: [],
    products: [
      {
        id: 1,
        user: '22',
        merchandise: '222',
        title: 'x-cape',
        category: 'capes',
        price: '10',
        isDiscounted: false,
        isCopounAccept: false,
        user: '',
        isInStock: true,
        colors: ['red', 'green'],
        sizes: ['S', 'M', 'L'],
        ratings: [5, 4, 3, 2, 1],
        questions_answers: [
          { question: 'question', answer: 'answer' },
          { question: 'question', answer: 'answer' },
        ],
        reviews: [
          { user: 'user', id: '', review: 'review' },
          { user: 'user', id: '', review: 'review' },
        ],
        description:
          'description description description description description',
      },
      {
        id: 2,
        user: '22',
        merchandise: '222',
        title: 'x-cape',
        category: 'capes',
        price: '10',
        isDiscounted: false,
        isCopounAccept: false,
        isInStock: true,
        colors: ['red', 'green'],
        sizes: ['S', 'M', 'L'],
        ratings: [5, 4, 3, 2, 1],
        questions_answers: [
          { question: 'question', answer: 'answer' },
          { question: 'question', answer: 'answer' },
        ],
        reviews: [
          { user: '', id: '', review: '' },
          { user: '', id: '', review: '' },
        ],
        description:
          'description description description description description',
      },
      {
        id: 3,
        user: '22',
        merchandise: '222',
        title: 'x-cape',
        category: 'capes',
        price: '10',
        isDiscounted: false,
        isCopounAccept: false,
        isInStock: true,
        colors: ['red', 'green'],
        sizes: ['S', 'M', 'L'],
        ratings: [5, 4, 3, 2, 1],
        questions_answers: [
          { question: 'question', answer: 'answer' },
          { question: 'question', answer: 'answer' },
        ],
        reviews: [
          { user: '', id: '', review: '' },
          { user: '', id: '', review: '' },
        ],
        description:
          'description description description description description',
      },
      {
        id: 4,
        user: '22',
        merchandise: '222',
        title: 'x-cape',
        category: 'capes',
        price: '10',
        isDiscounted: false,
        isCopounAccept: false,
        isInStock: true,
        colors: ['red', 'green'],
        sizes: ['S', 'M', 'L'],
        ratings: [5, 4, 3, 2, 1],
        questions_answers: [
          { question: 'question', answer: 'answer' },
          { question: 'question', answer: 'answer' },
        ],
        description:
          'description description description description description',
        reviews: [
          { user: '', id: '', review: '' },
          { user: '', id: '', review: '' },
        ],
      },
      {
        id: 5,
        user: '22',
        merchandise: '222',
        title: 'x-cape',
        category: 'capes',
        price: '10',
        isDiscounted: false,
        isCopounAccept: false,
        isInStock: true,
        colors: ['red', 'green'],
        sizes: ['S', 'M', 'L'],
        ratings: [5, 4, 3, 2, 1],
        questions_answers: [
          { question: 'question', answer: 'answer' },
          { question: 'question', answer: 'answer' },
        ],
        reviews: [
          { user: '', id: '', review: '' },
          { user: '', id: '', review: '' },
        ],
        description:
          'description description description description description',
      },
    ],
    product: {},
  },
  getters: {},
  mutations: {
    setMerchandise(state, data) {
      state.merchandise = data
    },

    setProduct(state, data) {
      state.product = state.products.find((itm) => itm.id == data.id)
    },
  },
  actions: {},
}
