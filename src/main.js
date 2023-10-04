import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import VueClickAway from "vue3-click-away";

import 'bootstrap/dist/css/bootstrap.min.css'

import "bootstrap-icons/font/bootstrap-icons.css"


const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueClickAway) 
app.use(router)

app.mount('#app')


import 'bootstrap/dist/js/bootstrap.min.js';


