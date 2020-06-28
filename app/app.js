import Vue from 'nativescript-vue';
import Home from './components/Home'
import Navbar from '~/components/Navbar';
import {ModelManager} from "~/components/ModelManager";
import {StaticObjectLoader} from "~/components/StaticObjectLoader";
//Vue.config.silent = false;
Vue.component('Navbar', Navbar);
Vue.prototype.$modelManager = new ModelManager();
Vue.prototype.$sol = new StaticObjectLoader();

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
