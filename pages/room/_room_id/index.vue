<template>
  <div>
    <v-flex d-flex>
      <v-icon @click="$router.go(-1)">mdi-chevron-left</v-icon>
      <h1 class="ma-4">ROOM {{ roomId }}</h1>
    </v-flex>
    <v-row fluid>
      <v-col md="3" lg="3" style="height: 700px" class="pa-0 overflow-y-auto">
        <UsersConnected :users="usersConnected"></UsersConnected>
      </v-col>
      <v-col
        id="messages"
        style="height: 700px;"
        class="pa-0 overflow-y-auto"
        md="9"
        lg="9"
      >
        <MessagesList :messages="messages"></MessagesList>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-text-field
        v-model="message"
        @keyup.enter="sendMessage"
        @click:append-outer="sendMessage"
        append-outer-icon="mdi-send"
        outlined
        shaped
        placeholder="Type here ..."
      ></v-text-field>
    </v-row>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapGetters } from 'vuex'
import UsersConnected from '~/components/UsersConnected'
import MessagesList from '~/components/MessagesList'

// const host = 'http://localhost:3000'
const host = process.env.API_URL

export default {
  middleware: ['authenticated'],

  components: { UsersConnected, MessagesList },

  data() {
    return {
      message: '',
      messages: [],
      usersConnected: [],
      socket: null
    }
  },

  computed: {
    ...mapGetters('auth', ['user']),

    roomId() {
      return this.$route.params.room_id
    }
  },

  mounted() {
    const options = {
      rememberUpgrade: true,
      transports: ['websocket'],
      secure: true,
      rejectUnauthorized: false,
      transportOptions: {
        polling: { extraHeaders: { Authorization: `${this.user.token}` } }
      }
    }

    this.socket = io(host, options)

    this.socket.emit('joinRoom', this.roomId, this.user)
    this.socket.emit('requestMessages', this.roomId)

    this.socket.on('loadMessages', (messages) => {
      this.messages = messages
    })

    this.socket.on('usersConnected', (users) => {
      this.usersConnected = users
    })

    // this.socket.on('createMsg', (data, roomId) => {
    //   console.log('createMsg', data)
    // })
  },

  updated() {
    this.$nextTick(() => this.scrollToEnd())
  },

  methods: {
    scrollToEnd() {
      const container = this.$el.querySelector('#messages')
      container.scrollTop = container.scrollHeight
    },

    sendMessage() {
      if (this.message) {
        this.socket.emit('generateMsg', this.message, this.roomId)
      }
      this.message = ''
      this.scrollToEnd()
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
