import './assets/app.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './assets/router/index.js'
const app = createApp(App)
app.use(router)
createApp(App).mount('#app')
