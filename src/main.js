import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'
// https://github.com/nuxt/vue-meta/tree/next
import { createMetaManager } from 'vue-meta'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .use(router)
  .use(createMetaManager())
  .mount('#app')
