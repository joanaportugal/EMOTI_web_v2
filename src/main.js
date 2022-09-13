import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueApexCharts)

Vue.component('apexchart-chart', VueApexCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
