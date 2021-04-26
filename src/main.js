// 入口文件
import Vue from 'vue';

// 根组件
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
// window.showMessage = showMessage;
// showMessage('sadhoaisda');

new Vue({
  // 渲染组件
  /**
   * 预编译
   * 源代码 -> 打包 -> 运行
   * SFC->打包成render函数(虚拟节点)
   * SFC单页面模块 类似单组件
   * 
   * 好处：
   * 1. 运行时不再需要编译模板了，提高了运行效率
   * 2. 打包结果中不再需要vue的编译代码，减少了打包体积
   */
  render: h => h(App),
  router,
}).$mount('#app')
