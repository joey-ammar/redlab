import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'

import App from './App.vue'
import router from './router'
import i18n from './i18n.js';

import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faFlask } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faFlask)


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
app.use(i18n);

import "bootstrap/dist/js/bootstrap.js";