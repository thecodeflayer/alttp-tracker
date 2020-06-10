import Vue from 'nativescript-vue';
import Home from './components/Home'
import Navbar from '~/components/Navbar';
import {ModelManager} from "~/components/ModelManager";
Vue.config.silent = false;
Vue.component('Navbar', Navbar);
Vue.prototype.$modelManager = new ModelManager();
new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
