<template>
  <div>
    <h1>General</h1>
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
