import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import components from './components/UI/index'

components.forEach(component => app.component(component.name, component))

app.mount('#app')
