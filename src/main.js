import Vue from 'vue'
import App from './App.vue'
import uswds from 'uswds'

Vue.config.productionTip = false
Vue.use(uswds)

new Vue({
  render: h => h(App),
}).$mount('#app')
