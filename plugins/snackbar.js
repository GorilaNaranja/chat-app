import Vue from 'vue'

export default function() {
  const bus = new Vue()
  Vue.prototype.$bus = bus

  Vue.prototype.$snackbar = {
    alertSuccess(message) {
      bus.$emit('show-snackbar', true, message)
    },

    alertError(message) {
      bus.$emit('show-snackbar', false, `${message}`)
    }
  }
}
