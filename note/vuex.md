# vuex
数据仓库模块
```js
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex); // 应用vuex插件
const store = new Vuex.Store({
    // 仓库配置对象
    state: { // 默认值
        xxx: 0 // xxx默认值为0
    }
});
export default store;
```
会在vue中注册了实例`$store`。

数据的变更`mutation`
```js
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex); // 应用vuex插件
const store = new Vuex.Store({
    // 仓库配置对象
    state: { // 默认值
        xxx: 0 // xxx默认值为0
    },
    mutations: {
    /**
     * 每个mutation是一个方法，它描述了数据在某种场景下的变化
     * increase mutation描述了数据在增加时应该发生的变化
     * 参数state为当前的仓库数据
     */
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    /**
     * 求n次幂
     * 该mutation需要一个额外的参数来提供指数
     * 我们把让数据产生变化时的附加信息称之为负荷（负载） payload
     * payload可以是任何类型，数字、字符串、对象均可
     * 在该mutation中，我们约定payload为一个数字，表示指数
     */
    power(state, payload){
      state.count **= payload;
    }
  }
});
export default store;
```

当我们有了`mutation`后，就不应该直接去改动仓库的数据了

而是通过`store.commit`方法提交一个`mutation`，具体做法是

```js
store.commit("mutation的名字", payload);
```

现在，我们可以通过`vue devtools`观测到数据的变化了

**特别注意： **

1. `mutation`中不得出现异步操作

   > 在实际开发的规范中，甚至要求不得有副作用操作
   >
   > 副作用操作包括：
   >
   > - 异步
   > - 更改或读取外部环境的信息，例如`localStorage、location、DOM`等

2. 提交`mutation`是数据改变的**唯一原因**

<img src="http://mdrs.yuanjin.tech/img/20210129151639.png" alt="image-20210129151639301" style="zoom: 50%;" />

# 异步处理

如果在`vuex`中要进行异步操作，需要使用`action`

```js
const store = new Vuex({
  state: { 
    count: 0
  },
  mutations: {
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    power(state, payload){
      state.count **= payload;
    }
  },
  actions: {
    /**
     * ctx: 类似于store的对象
     * payload: 本次异步操作的额外信息
     */
    asyncPower(ctx, payload){
      setTimeout(function(){
        ctx.commit("power", payload)
      }, 1000)
    }
  }
})
```

<img src="http://mdrs.yuanjin.tech/img/20210129160320.png" alt="image-20210129160320025" style="zoom:50%;" />



# 用户模块逻辑示意图

路由总体示意图

![image-20210130141625925](http://mdrs.yuanjin.tech/img/20210130141626.png)

鉴权守卫逻辑示意图

![image-20210130144001709](http://mdrs.yuanjin.tech/img/20210130144001.png)

# 参考资料

## vue

[watch配置](https://cn.vuejs.org/v2/api/#watch)

[Vue.prototype.$watch](https://cn.vuejs.org/v2/api/#vm-watch)

## vuex

[mapState](https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

[getters](https://vuex.vuejs.org/zh/guide/getters.html)

[mapGetters](https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

[modules](https://vuex.vuejs.org/zh/guide/modules.html)

[watch](https://vuex.vuejs.org/zh/api/#watch)

## router

[exact-path](https://router.vuejs.org/api/#exact-path)

[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)

