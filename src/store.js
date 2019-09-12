import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || '',
    status: null
  },

  mutations: {
    // will set the status to loading
    loadingMutation(state) {
      state.status = 'loading'
     },

    // will set the loading and token to success
    loginSucessMutation(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },

    // this will set the loading as False
    loginFailureMutation(state) {
      state.status = 'failure'
      state.token = ''
      state.user = {}
    }
  },

  actions: {
    // this will be called from the components and call the loginMutation.
    loginAction ({ commit }, userDetails) {
      // update the state to loading
      commit('loadingMutation')
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:3000/login', userDetails)
          .then(response => {
            // success response, save the response to the vuex Store
            const token = response.data.auth_token
            const user = response.data.user
            commit('loginSucessMutation', { token, user })
            // save the token to the localStorage and update to the axios
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            resolve(response)
          })
          .catch(error => {
            // failure to login, remove the token if any
            commit('loginFailureMutation')
            localStorage.removeItem('token')
            reject(error)
          })
      })
    }
  }
})
