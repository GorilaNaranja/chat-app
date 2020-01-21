<template>
  <v-card outlined tile>
    <v-card-text v-for="message in messages" :key="message.id">
      <Message :message="message"></Message>
    </v-card-text>
  </v-card>
</template>

<script>
import Message from '~/components/Message'
export default {
  components: { Message },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>
