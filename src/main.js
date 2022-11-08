import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import components from './components/UI/index'

components.forEach(component => app.component(component.name, component))

app.mount('#app')
