import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_RAILS_API_URL

export default {
  async login (userDetails) {
    const response = await axios.post('login', userDetails)
    return response.data
  },

  async todos () {
    const response = await axios.get('todos')
    return response.data
  },

  async todo (todoData) {
    const response = await axios.post('todos', todoData)
    return response.data
  },

  async updateTodo (todo) {
    const updatedTodoHash = { is_completed: todo.is_completed }
    const response = await axios.put('todos/' + todo.id, updatedTodoHash)
    return response.data
  }
}
