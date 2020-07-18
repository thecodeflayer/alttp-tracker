import Vue from 'nativescript-vue';
import Home from '@/components/Home.vue';
import VueDevtools from 'nativescript-vue-devtools';
import Navbar from '@/components/Navbar.vue';
import {ModelManager} from '@/utils/ModelManager';
import {StaticObjectLoader} from '@/components/StaticObjectLoader';


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true;//(TNS_ENV === 'production');
Vue.component('Navbar', Navbar);
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$modelManager = new ModelManager();
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$sol = new StaticObjectLoader();

new Vue({
  render: h => h('frame', [h(Home)])
}).$start();
