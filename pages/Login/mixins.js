export const loginMixin = {
  created() {
    console.log('NUXT_ENV_COOL_WORD', process.env.NUXT_ENV_COOL_WORD)
  },
}
