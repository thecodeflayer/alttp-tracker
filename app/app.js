import Vue from "nativescript-vue";
import Home from './components/Home'
import Navbar from "~/components/Navbar";
Vue.config.silent = false;
Vue.component('Navbar', Navbar);
new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
