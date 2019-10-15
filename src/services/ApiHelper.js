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
  }
}
