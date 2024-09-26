import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope,faLocationDot, farClock)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
