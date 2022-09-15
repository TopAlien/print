import Vue from 'vue'
import {hiPrintPlugin} from 'vue-plugin-hiprint'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(hiPrintPlugin, '$pluginName')
hiPrintPlugin.disAutoConnect();

new Vue({
  render: h => h(App),
}).$mount('#app')
