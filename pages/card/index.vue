<template>
  <div class="flex justify-center items-center h-screen bg-gray-200">
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/new-year-card.png" alt="New Year Card">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Happy New Year!</div>
        <p class="text-gray-700 text-base">
          Wishing you a joyous and prosperous new year!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (useCookie('access_token').value) {
    useAccessToken().value = useCookie('access_token').value
  }
  if (!useAccessToken().value) {
    navigateTo('/login');
  }
})
</script>
