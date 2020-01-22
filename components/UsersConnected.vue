<template>
  <v-navigation-drawer permanent>
    <v-list nav dense>
      <h3 class="ma-2">Users online</h3>
      <v-divider></v-divider>
      <v-list-item v-for="user in users" :key="user._id" link>
        <v-list-item-icon>
          <v-icon right>mdi-account-circle-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ user.name }} (online) </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
