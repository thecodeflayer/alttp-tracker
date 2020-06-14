import Vue from 'nativescript-vue';
import Home from './components/Home'
import Navbar from '~/components/Navbar';
import {ModelManager} from "~/components/ModelManager";
import Items from "~/components/Items";
Vue.config.silent = false;
Vue.component('Navbar', Navbar);
Vue.prototype.$modelManager = new ModelManager();
Vue.prototype.$maxItemValues = {
    bow: 2,
    boomerang: 2,
    jar: 4,
    glove: 2,
    sword: 4,
    shield: 3,
    tunic: 2
}
new Vue({
    render: h => h('frame', [h(Items)]),
}).$start();
