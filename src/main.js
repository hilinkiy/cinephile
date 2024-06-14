import {
    createApp
} from 'vue';
import '../src/assets/styles/style.scss';
import App from './App.vue';


import {
    createPinia
} from "pinia";

import router from "./router/router.js";

import VueLazyload from "vue-lazyload";

import errorImage from "./assets/images/error.png";

const pinia = createPinia();

import Actors from "./components/Actors.vue";

createApp(App).use(router).use(pinia).use(VueLazyload, {
    error: errorImage,
}).component('Actors', Actors).mount('#app');