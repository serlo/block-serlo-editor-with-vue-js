import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag === 'react-wrapper'

app.use(router)

app.mount('#app')
