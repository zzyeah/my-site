// 入口文件
// import './mock';
import Vue from 'vue';

// 根组件
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from './utils/showMessage';
import './api/banner';
import './eventBus';
import store from './store';
store.dispatch('login/whoAmI');
store.dispatch('setting/fetchSetting');
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from './directives/loading';
import vLazy from './directives/lazy';
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');