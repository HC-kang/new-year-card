<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header with Navigation -->
    <header class="bg-gray-800">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Brand Name -->
        <NuxtLink class="text-xl text-white font-semibold" to="/">New Year Card</NuxtLink>
        
        <!-- Navigation Links for Large Screens -->
        <nav class="hidden md:flex space-x-4">
          <NuxtLink class="text-gray-300 hover:text-white" to="/">Home</NuxtLink>
          <NuxtLink class="text-gray-300 hover:text-white" to="/card">Card</NuxtLink>
          <NuxtLink v-if="!accessToken" class="text-gray-300 hover:text-white" to="/login">Login</NuxtLink>
          <NuxtLink v-else class="text-gray-300 hover:text-white cursor-pointer" @click="logout" >Logout</NuxtLink>
        </nav>

        <!-- Hamburger Menu Icon for Small Screens -->
        <button @click="toggleMenu" class="md:hidden focus:outline-none focus:shadow-outline">
          <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path :class="{'hidden': menuOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path :class="{'hidden': !menuOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <nav class="md:hidden" v-show="menuOpen">
        <a class="block px-4 py-2 text-white" href="/">Home</a>
        <a class="block px-4 py-2 text-white" href="/card">Card</a>
        <a v-if="!accessToken" class="block px-4 py-2 text-white" href="/login">Login</a>
        <a v-else class="block px-4 py-2 text-white cursor-pointer" @click="logout">Logout</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-700 text-white py-4">
      <div class="container mx-auto px-4">
        <p>&copy; 2023 My Nuxt3 App. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);

const accessToken = useAccessToken()
const accessTokenFromCookie = useCookie('access_token')
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}

const logout = () => {
  accessToken.value = null
  useCookie('access_token').value = null
  window.location.href = '/'
}

onMounted(() => {
  if (accessTokenFromCookie.value && accessTokenFromCookie.value !== accessToken.value) {
    accessToken.value = accessTokenFromCookie.value
  }
})
</script>
