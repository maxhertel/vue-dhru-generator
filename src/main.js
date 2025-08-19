import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const app = createApp(App)

// Cria instância do Pinia
const pinia = createPinia()

// Registra no app
app.use(pinia)
app.use(router)

app.mount('#app')
