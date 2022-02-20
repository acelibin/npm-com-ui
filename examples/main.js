import Vue from 'vue'
import App from './App.vue'

// 本地按需引入
// import Demo from '../components/demo/index.js';
// Vue.use(Demo);
// import Test from '../components/test/index.js';
// Vue.use(Test);

// 本地全局引入
// import Common from '../components/index.js';
// Vue.use(Common);

// npm 库安装后全局引入
import Common from 'npm-com-ui'
Vue.use(Common);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
