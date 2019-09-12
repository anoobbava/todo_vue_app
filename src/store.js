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
    loadingMutation(state) { },

    // will set the loading and token to success
    loginSucessMutation(state, token, user) { },

    // this will set the loading as False
    loginFailureMutation(state) { }
  },

  actions: {
    // this will be called from the components and call th loginMutation.
    loginAction({ commit }, userDetails) { }
  }
})
