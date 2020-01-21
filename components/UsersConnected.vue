<template>
  <v-card class="pa-2" outlined tile>
    <v-card-text v-for="user in users" :key="user._id">
      <v-icon right>mdi-star</v-icon>
      <span> {{ user.name }} (online) </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>
