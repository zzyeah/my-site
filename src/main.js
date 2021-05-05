// 入口文件
import './mock';
import Vue from 'vue';

// 根组件
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from './utils/showMessage';
import './api/banner';
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from './directives/loading';
Vue.directive('loading', vLoading);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



// test
// import * as blogApi from './api/blog';

// blogApi.getBlogTypes().then(r => console.log('type', r));
// blogApi.getBlogs(2, 20, 3).then(r => console.log('blog', r));
