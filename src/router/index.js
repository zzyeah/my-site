import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { titleController } from '@/utils';
import store from '../store';

if (!window.VueRouter) {
    Vue.use(VueRouter); // 使用一个vue插件
}

const router = new VueRouter({
    // 配置
    routes, // 路由匹配规则
    mode: 'history',
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        const status = store.getters['login/status'];
        if (status === "loading") {
            // 加载中，无法确定是否已经登录
            next({
                path: "/loading",
                query: {
                    returnurl: to.fullPath,
                },
            });
        } else if (status === "login") {
            // 登录过了
            next();
        } else if (status === 'unlogin') {
            // 未登录
            alert("该页面需要登录，你还没有登录，请先登录");
            next({
                name: "Login",
            });
        }
    }
    else next();
})

router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title);
    }
})
export default router;