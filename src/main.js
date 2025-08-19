import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Importa CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importa JS do Bootstrap (depende do Popper já incluído no pacote)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importa seu CSS global (opcional)
//import './assets/main.css'
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
