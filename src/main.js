import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Axios from 'axios'

Vue.config.productionTip = false

// setup axios for the http requests
Vue.prototype.$http = Axios

// fetch data from localstorage
const token = localStorage.getItem('token')

// will prepend all the requests with token from localStorage
if (token) {
  vuetify.prototype.$http.defaults.headers.common = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
