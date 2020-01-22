<template>
  <v-card class="mx-auto mt-4" max-width="400">
    <v-card-title>Register</v-card-title>
    <v-card-text>
      <v-text-field v-model="user.name" label="Name"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-text-field
        v-model="user.password"
        @click:append="showPass = !showPass"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass ? 'text' : 'password'"
        label="Password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="submit" class="btn float-right btn-dark">Register</v-btn>
      <v-btn
        @click="$router.push({ name: 'login' })"
        class="btn float-right btn-dark"
        >Go to login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showPass: false,
      user: { name: null, email: null, password: null }
    }
  },
  methods: {
    ...mapActions('auth', ['createUser']),

    async submit() {
      try {
        await this.createUser({ ...this.user, role: 'USER_ROLE' })
        this.$router.push({ name: 'login' })
      } catch (err) {
        this.$snackbar.alertError(err.message)
      }
    }
  }
}
</script>

<style></style>
