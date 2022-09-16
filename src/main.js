import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {hiPrintPlugin} from 'vue-plugin-hiprint'
import App from './App.vue'

Vue.use(Antd);

Vue.use(hiPrintPlugin, '$pluginName')
hiPrintPlugin.disAutoConnect();

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')
