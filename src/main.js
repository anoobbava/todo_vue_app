import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

// fetch data from localstorage
const token = localStorage.getItem('token')

// will prepend all the requests with token from localStorage
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
