<template>
  <div class="flex flex-col items-center justify-center bg-gray-200 min-h-screen">
    <!-- Card -->
    <div id="captureArea" class="max-w-lg rounded overflow-hidden shadow-lg mb-4">
      <div v-if="loading" class="w-full flex flex-col items-center justify-center">
        <div class="w-full spinner"></div>
      </div>
      <img v-else class="w-full" :src="basicImage" alt="New Year Card">
      <div class="bg-gray-200 px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base mb-4">
          {{ content }}
        </p>
      </div>
    </div>

    <button class="bg-gray-500 hover:bg-gray-700 text-white p-1 rounded focus:outline-none focus:shadow-outline"
      @click="download">Download as Image</button>

    <!-- User Request Form (Outside the Card) -->
    <div class="max-w-lg w-full px-6 py-6">
      <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-4 pt-4 pb-4 flex">
        <input
          class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="userRequest" type="text" placeholder="Enter your request for image" v-model="userRequest">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-r focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </div>
    <div class="max-w-lg w-full px-6">
      <textarea
        class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="title" type="text" placeholder="Enter your title" v-model="title"></textarea>
    </div>
    <div class="max-w-lg w-full px-6">
      <textarea
        class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="content" type="text" placeholder="Enter your content" v-model="content"></textarea>
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app';
import { domToPng } from 'modern-screenshot'


const config = useRuntimeConfig();
let userRequest = ref('');
let basicImage = ref('https://d3h4nb97xw12d7.cloudfront.net/20231230173145cmFiYml0.png');
let title = ref('Happy New Year!');
let content = ref('Wishing you a joyous and prosperous new year!');
let loading = ref(false);

watch(title, () => {
  const limit = 80
  if (title.value.length > limit) {
    alert('Please enter your title less than limit characters');
    title.value = title.value.substring(0, limit);
  }
});

watch(content, () => {
  const limit = 200
  if (content.value.length > limit) {
    alert('Please enter your content less than limit characters');
    content.value = content.value.substring(0, limit);
  }
});

watch(userRequest, () => {
  const limit = 100
  if (userRequest.value.length > limit) {
    alert('Please enter your request less than limit characters');
    userRequest.value = userRequest.value.substring(0, limit);
  }
});

onMounted(async () => {
  if (useCookie('access_token').value) {
    useAccessToken().value = useCookie('access_token').value
  }
  if (!useAccessToken().value) {
    navigateTo('/login');
  }
})

const handleSubmit = async () => {
  loading.value = true;
  if (!userRequest.value) {
    alert('Please enter your request');
    loading.value = false;
    return;
  }
  if (userRequest.value.length > 100) {
    alert('Please enter your request less than 100 characters');
    loading.value = false;
    return;
  }
  const response = await $fetch(`${config.public.apiBaseUrl}/gpt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${useAccessToken().value}`
    },
    body: JSON.stringify({
      value: userRequest.value
    })
  })
  if (response) {
    basicImage.value = response;
    userRequest.value = '';
  }
  loading.value = false;
}

const download = () => {
  domToPng(document.getElementById('captureArea')).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = dataUrl
    link.click()
  })
}
</script>

<style>
.spinner {
  border: 4px solid rgba(0, 0, 0, .1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: #09f;

  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>