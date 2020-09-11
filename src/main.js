import Vue from 'vue'
import VierGewinnt from './VierGewinnt.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(VierGewinnt)
}).$mount('#vierGewinnt')
