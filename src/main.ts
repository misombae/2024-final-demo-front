import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {setupGlobalProperties} from  './system/index'
const app = createApp(App)
setupGlobalProperties(app)  //전역변수 사용
app.use(createPinia())
app.use(router)
app.mount('#app')
