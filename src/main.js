import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faLocationDot, faGrip } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock,faSquareMinus, } from '@fortawesome/free-regular-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope,faLocationDot, farClock, faSquareMinus, faGrip)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
