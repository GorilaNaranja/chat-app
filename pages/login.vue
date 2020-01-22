<template>
  <v-card class="mx-auto mt-4" max-width="400">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="user.email"
        type="text"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        @click:append="showPass = !showPass"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass ? 'text' : 'password'"
        label="Password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="submit" class="btn btn-dark">Login</v-btn>
      <v-btn
        @click="$router.push({ name: 'register' })"
        class="btn float-right btn-dark"
        >Register</v-btn
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
      user: { email: null, password: null }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),

    async submit() {
      try {
        await this.login(this.user)
        this.$router.push({ name: 'room' })
      } catch (err) {
        this.$snackbar.alertError(err.message)
      }
    }
  }
}
</script>

<style></style>
