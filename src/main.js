import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap/dist/css/bootstrap.css";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')


import "bootstrap/dist/js/bootstrap.js";