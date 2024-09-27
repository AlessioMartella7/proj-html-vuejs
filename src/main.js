import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';


library.add(faMapMarkerAlt, faPhone, faEnvelope)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.directive('animateonscroll', AnimateOnScroll);
app.use(PrimeVue, {
    unstyled: true
});
app.mount('#app')
