<template>
  <v-snackbar v-model="show" :color="color" :multi-line="true" top right>
    <span class="snackbar-message subheading text--white">{{ message }}</span>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      success: true,
      message: 'Empty message'
    }
  },
  computed: {
    color() {
      return this.success ? 'success' : 'error'
    }
  },
  mounted() {
    this.$bus.$on('show-snackbar', (success, message) => {
      this.message = message
      this.show = true
      this.success = success
    })
  }
}
</script>

<style>
.snackbar-message {
  color: white;
  font-size: 1rem;
}
</style>
