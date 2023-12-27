<template>
  <div>
    Hello World!
    {{ accessToken ? accessToken : 'no access token' }}
  </div>
</template>
<script setup lang="ts">
const accessToken = useAccessToken()
</script>