import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AreaExample from './charts/AreaExample'
import BarExample from './charts/BarExample'


import DonutExample from './charts/DonutExample'

import VueApexCharts from 'vue-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: '/area', component: AreaExample },
  { path: '/bar', component: BarExample },
  { path: '/donut', component: DonutExample }

]

const router = new VueRouter({
  routes: routes
})
router.replace('/line')


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
