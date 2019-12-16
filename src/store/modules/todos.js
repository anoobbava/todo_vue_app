import ApiHelper from '@/services/ApiHelper'

export default {

  state: {
    todos: []
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
    },

    saveTodoAction ({ commit }, todoData) {
      return new Promise((resolve, reject) => {
        ApiHelper.todo(todoData)
          .then(response => {
            commit('saveTodoMutation', response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    updateTodoAction ({ commit }, todo) {
      return new Promise((resolve, reject) => {
        ApiHelper.updateTodo(todo)
          .then(response => {
            commit('updateTodoMutation', response)
            resolve(response)
          })
          .catch(error => {
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
      state.todos = []
    },

    saveTodoMutation (state, todo) {
      state.todos = [...state.todos, todo]
    },

    updateTodoMutation (state, todo) {
      let index = state.todos.findIndex(element => element.id === todo.id)
      state.todos[index] = todo
    }
  },

  getters: {
    allTodos: state => state.todos.sort((a, b) => b.id - a.id)
  }
}
