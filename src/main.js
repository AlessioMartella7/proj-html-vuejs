import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope,faArrowRight,faMinus,faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope, faArrowRight, faMinus,faChevronUp)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
