import Vue from 'vue';
import App from './App.vue';

import './plugins/element';

// import '@/assets/theme-chalk/index.scss';
// import '@/assets/theme-chalk/display.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
