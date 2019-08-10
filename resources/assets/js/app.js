require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './router'

import store from './store/index'
import App from './components/App'

import zh_TW from './locale/zh_TW';
import VeeValidate, { Validator } from 'vee-validate';

Vue.use(VeeValidate);

Validator.localize('zh_TW', zh_TW);


Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('app',App)

new Vue({
    el: '#app',
    router:router,
    store
});