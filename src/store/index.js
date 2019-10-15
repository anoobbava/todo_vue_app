import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import todos from '@/store/modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    todos
  },

  state: {},

  mutations: {},

  actions: {}
})
