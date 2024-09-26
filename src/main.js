import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope, faArrowRight, faBars)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
