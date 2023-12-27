// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      kakaoRestApiKey: process.env.KAKAO_REST_API_KEY,
      kakaoRedirectUri: process.env.KAKAO_REDIRECT_URI,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI,
    }
  }
});
