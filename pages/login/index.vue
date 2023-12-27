<template>
  <div class="container mt-5 mx-auto p-4 max-w-md">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <h1 class="block text-gray-700 text-lg font-bold mb-2">로그인</h1>
      </div>

      <form @submit.prevent="loginWithEmail">
        <!-- Email Input -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email-input">
            사용자 이메일:
          </label>
          <input id="email-input" v-model="email" type="text" required placeholder="Enter email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password-input">
            비밀번호:
          </label>
          <input id="password-input" v-model="password" type="password" required placeholder="Enter password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        </div>

        <!-- Login Button -->
        <div class="flex items-center justify-center">
          <button type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            로그인
          </button>
        </div>
      </form>

      <hr class="my-6" />

      <!-- External Login Links -->
      <div class="text-center mt-3">
        <a :href="googleLoginUrl"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
          Google로 로그인하기
        </a>
        <a :href="kakaoLoginUrl"
          class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Kakao로 로그인하기
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRuntimeConfig } from 'nuxt/app';
const config = useRuntimeConfig()

const googleClientId = config.public.googleClientId
const googleRedirectUri = config.public.googleRedirectUri
const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile%20https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=${googleRedirectUri}&client_id=${googleClientId}`

const kakaoRestApiKey = config.public.kakaoRestApiKey
const kakaoRedirectUri = config.public.kakaoRedirectUri
const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoRestApiKey}&redirect_uri=${kakaoRedirectUri}`

let email = 'test@test11111.com';
let password = 'test1234';

const loginWithEmail = async () => {
  const response = await $fetch('http://localhost:3003/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (response) {
    useAccessToken().value = response.accessToken
    useCookie('access_token').value = response.accessToken
    navigateTo('/');
  }
}

onBeforeMount(() => {
  if (useCookie('access_token').value) {
    useAccessToken().value = useCookie('access_token').value
  }
  if (useAccessToken().value) {
    navigateTo('/');
  }
})
</script>
