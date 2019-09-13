import axios from 'axios'
import ApiHelper from '@/services/ApiHelper'

export default {
  state: {
    user: '',
    token: localStorage.getItem('token') || '',
    status: null
  },

  mutations: {
    // will set the status to loading
    loadingMutation (state) {
      state.status = 'loading'
    },

    // will set the loading and token to success
    loginSucessMutation (state, { token, userObject }) {
      state.status = 'success'
      state.token = token
      state.user = userObject
    },

    // this will set the loading as False
    loginFailureMutation (state) {
      state.status = 'failure'
      state.token = ''
      state.user = {}
    },

    logoutMutation (state) {
      state.user = ''
      state.token = ''
      state.status = null
    }
  },

  actions: {
    // this will be called from the components and call the loginMutation.
    loginAction ({ commit }, userDetails) {
      // update the state to loading
      commit('loadingMutation')
      return new Promise((resolve, reject) => {
        // call API
        ApiHelper.login(userDetails)
          .then(response => {
            // success response, save the response to the vuex Store
            const token = response.auth_token
            const userObject = response.user
            commit('loginSucessMutation', { token, userObject })
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
    },

    logoutAction ({ commit }) {
      commit('logoutMutation')
      localStorage.removeItem('token')
    }
  },

  getters: {
    isLoggedIn: state => state.status === 'success',
    userName: state => state.user.name,
    status: state => state.status,
    token: state => state.token
  }
}
