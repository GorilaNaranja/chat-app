import mgtService from '@/lib/mgtService'

const state = () => ({
  user: null
})

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  CLEAR(state) {
    state.user = undefined
    state.token = undefined
  }
}

const getters = {
  user: (state) => state.user,
  isLogged: (state) => !!(state.user && state.user.token)
}

const actions = {
  async login({ commit }, data) {
    try {
      const user = await mgtService.login(data)

      commit('SET_USER', {
        email: user.user.email,
        name: user.user.name,
        token: user.token
      })
    } catch (error) {
      commit('CLEAR')
      throw error
    }
  },

  async createUser({ commit }, data) {
    try {
      await mgtService.createUser(data)
    } catch (error) {
      throw error
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
