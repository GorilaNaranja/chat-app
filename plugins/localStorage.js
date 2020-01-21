import createPersistedState from 'vuex-persistedstate'

export default ({ store, req, res }) => {
  createPersistedState({
    paths: ['auth']
  })(store)
}
