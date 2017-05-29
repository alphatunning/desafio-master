import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.js';

import appHeader from './components/header/header.vue';
import appSection from './components/section/section.vue';
import appFooter from './components/footer/footer.vue';

Vue.component('app-header',appHeader);
Vue.component('app-section',appSection);
Vue.component('app-footer',appFooter);

Vue.use(VueResource);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
