import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')