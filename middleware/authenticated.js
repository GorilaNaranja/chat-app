export default function({ store, redirect }) {
  console.log('IsLoged', store.getters['auth/isLogged'])
  if (!store.getters['auth/isLogged']) {
    // return redirect({ name: 'login' })
  }
}
