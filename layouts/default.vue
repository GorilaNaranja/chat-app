<template>
  <v-app dark>
    <Snackbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar'

export default {
  components: { Snackbar }
}
</script>
