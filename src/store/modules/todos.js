import ApiHelper from '@/services/ApiHelper'

export default {

  state: {
    todos: ''
  },

  actions: {
    fetchAllTodoAction ({ commit }) {
      return new Promise((resolve, reject) => {
        ApiHelper.todos()
          .then(response => {
            commit('fetchAllTodoMutation', response)
            resolve(response)
          })
          .catch(error => {
            commit('failureTodoMutation')
            reject(error)
          })
      })
    }
  },

  mutations: {
    fetchAllTodoMutation (state, todos) {
      state.todos = todos
    },

    failureTodoMutation (state) {
      state.todos = ''
    }
  },

  getters: {
    allTodos: state => state.todos
  }
}
