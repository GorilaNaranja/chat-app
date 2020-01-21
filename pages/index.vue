<template>
  <v-card class="mx-auto mt-4" max-width="400">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-title> HOME PAGE </v-card-title>
    <v-card-subtitle>
      Testing a chat app made with vue (nuxt) and node backend using
      sockets.io</v-card-subtitle
    >
    <v-card-actions>
      <v-btn @click="$router.push({ name: 'login' })">Login</v-btn>
      <v-btn @click="$router.push({ name: 'register' })">Register</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>
