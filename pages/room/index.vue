<template>
  <div>
    <v-flex d-flex>
      <v-icon @click="$router.go(-1)">mdi-chevron-left</v-icon>
      <h1>General</h1>
    </v-flex>
    <v-text-field v-model="room" label="Room"></v-text-field>
    <v-btn @click="enterRoom" :disabled="!room">Enter</v-btn>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],

  data() {
    return {
      room: null
    }
  },

  methods: {
    enterRoom() {
      this.$router.push({
        name: 'room-room_id',
        params: { room_id: this.room }
      })
    }
  }
}
</script>
