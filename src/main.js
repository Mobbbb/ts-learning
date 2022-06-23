import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './libs/index.js'
import './styles/index.css'
import './styles/media.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
