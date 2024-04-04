// import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
library.add(fab);
library.add(faPhone);
library.add(faUserSecret);

app.use(router)
app.mount('#app')



