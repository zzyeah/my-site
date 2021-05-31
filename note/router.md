路由
- 基本配置

- 路由模式

- 激活状态
vue-router会用当前路径匹配导航路径

- 命名路由

router-view
用于渲染匹配到的组件

router-link -> :to="" 
无刷新切换
自动匹配模式 （hash/history/abstract）

# 文章列表页逻辑

## 路由跳转逻辑

![image-20210107140253824](http://mdrs.yuanjin.tech/img/20210107140253.png)

## 组件逻辑

![image-20210107142310757](http://mdrs.yuanjin.tech/img/20210107142310.png)

### BlogList

![image-20210107153623557](http://mdrs.yuanjin.tech/img/20210107153623.png)

### BlogCategory

![image-20210107154531659](http://mdrs.yuanjin.tech/img/20210107154531.png)

# 知识

## 动态路由

我们希望下面的地址都能够匹配到`Blog`组件

- `/article`，显示全部文章
- `/article/cate/1`，显示分类`id`为`1`的文章
- `/article/cate/3`，显示分类`id`为`3`的文章
- ...

第一种情况很简单，只需要将一个固定的地址匹配到`Blog`组件即可

```js
{
  path: "/article",
  name: "Blog",
  component: Blog
}
```

但后面的情况则不同：匹配到`Blog`组件的地址中，有一部分是动态变化的，则需要使用一种特殊的表达方式：

```js
{
  path: "/article/cate/:categoryId",
  name: "CategoryBlog",
  component: Blog
}
```

在地址中使用`:xxx`，来表达这一部分的内容是变化的，在`vue-router`中，将变化的这一部分称之为`params`，可以在`vue`组件中通过`this.$route.params`来获取

```js
// 访问 /article/cate/3
this.$route.params // { categoryId: "3" }
// 访问 /article/cate/1
this.$route.params // { categoryId: "1" }
```

### 动态路由的导航

```vue
<router-link to="/article/cate/3">to article of category 3</router-link>

<router-link :to="{
   name: 'CategoryBlog',
   params: {
       categoryId: 3           
   }                    
}">to article of category 3</router-link>
```

> vue-router官网：https://router.vuejs.org/zh/

<img src="http://mdrs.yuanjin.tech/img/20201202170037.png" alt="image-20201202170037391" style="zoom:50%;" />

1. **如何根据地址中的路径选择不同的组件？**
2. **把选择的组件放到哪个位置？**
3. **如何无刷新的切换组件？**



# 路由插件

```shell
npm i vue-router
```

路由插件的使用

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); // Vue.use(插件)  在Vue中安装插件

const router = new VueRouter({
  // 路由配置
})
new Vue({
  ...,
  router
})
```

# 基本使用

```js
// 路由配置
const router = new VueRouter({
  routes: [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
  	{ path: '/bar', component: Bar }
  ]
})
```



```html
<!-- App.vue -->
<div class="container">
  <div>
    <!-- 公共区域 -->
  </div>
  <div>
    <!-- 页面区域 -->
    <!-- vue-router 匹配到的组件会渲染到这里 -->
    <RouterView />
  </div>
</div>
```



# 路由模式

路由模式决定了：

1. 路由从哪里获取访问路径
2. 路由如何改变访问路径

`vue-router`提供了三种路由模式：

1. hash：默认值。路由从浏览器地址栏中的hash部分获取路径，改变路径也是改变的hash部分。该模式兼容性最好。

   ```
   http://localhost:8081/#/blog  -->  /blog
   http://localhost:8081/about#/blog  --> /blog
   ```

2. history：路由从浏览器地址栏的`location.pathname`中获取路径，改变路径使用的H5的`history api`。该模式可以让地址栏最友好，但是需要浏览器支持`history api`

   ```
   http://localhost:8081/#/blog  -->  /
   http://localhost:8081/about#/blog  --> /about
   http://localhost:8081/blog  --> /blog
   ```

3. abstract：路由从内存中获取路径，改变路径也只是改动内存中的值。这种模式通常应用到非浏览器环境中。

   ```shell
   内存： /			-->   /
   内存： /about	--> /about
   内存： /blog	  --> /blog
   ```

# 导航

`vue-router`提供了全局的组件`RouterLink`，它的渲染结果是一个`a`元素

```html
<RouterLink to="/blog">文章</RouterLink>
<!-- mode:hash 生成 -->
<a href="#/blog">文章</a>
<!-- mode:history 生成 -->
<!-- 为了避免刷新页面，vue-router实际上为它添加了点击事件，并阻止了默认行为，在事件内部使用hitory api更改路径 -->
<a href="/blog">文章</a>
```

<img src="http://mdrs.yuanjin.tech/img/20201203150453.png" alt="image-20201203150453332" />

<img src="http://mdrs.yuanjin.tech/img/20201203150918.png" alt="image-20201203150918219" style="zoom:50%;" />

## 激活状态

默认情况下，`vue-router`会用 **当前路径** 匹配 **导航路径** ：

- 如果当前路径是以导航路径开头，则算作匹配，会为导航的a元素添加类名`router-link-active`
- 如果当前路径完全等于导航路径，则算作精确匹配，会为导航的a元素添加类名`router-link-exact-active`



例如，当前访问的路径是`/blog`，则：

| 导航路径 | 类名                                          |
| -------- | --------------------------------------------- |
| /        | router-link-active                            |
| /blog    | router-link-active   router-link-exact-active |
| /about   | 无                                            |
| /message | 无                                            |



可以为组件`RouterLink`添加bool属性`exact`，将匹配规则改为：必须要精确匹配才能添加匹配类名`router-link-active`



例如，当前访问的路径是`/blog`，则：

| 导航路径 | exact | 类名                                          |
| -------- | ----- | --------------------------------------------- |
| /        | true  | 无                                            |
| /blog    | false | router-link-active   router-link-exact-active |
| /about   | true  | 无                                            |
| /message | true  | 无                                            |

例如，当前访问的路径是`/blog/detail/123`，则：

| 导航路径 | exact | 类名               |
| -------- | ----- | ------------------ |
| /        | true  | 无                 |
| /blog    | false | router-link-active |
| /about   | true  | 无                 |
| /message | true  | 无                 |



另外，可以通过`active-class`属性更改匹配的类名，通过`exact-active-class`更改精确匹配的类名



# 命名路由

使用命名路由可以解除系统与路径之间的耦合

```js
// 路由配置
const router = new VueRouter({
  routes: [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { name:"foo", path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
  	{ name:"bar", path: '/bar', component: Bar }
  ]
})

```

```html
<!-- 向to属性传递路由信息对象 RouterLink会根据你传递的信息以及路由配置生成对应的路径 -->
<RouterLink :to="{ name:'foo' }">go to foo</RouterLink>
```




## 编程式导航

除了使用`<RouterLink>`超链接导航外，`vue-router`还允许在代码中跳转页面

```js
this.$router.push("跳转地址"); // 普通跳转
this.$router.push({ // 命名路由跳转
  name:"Blog"
})

this.$router.go(-1); // 回退。类似于 history.go
```

## watch

利用`watch`配置，可以直接观察某个数据的变化，变化时可以做一些处理

```js
export default {
  // ... 其他配置
  watch: {
    // 观察 this.$route 的变化，变化后，会调用该函数
    $route(newVal, oldVal){
      // newVal：this.$route 新的值，等同 this.$route
      // oldVal：this.$route 旧的值
    },
    // 完整写法
    $route: {
      handler(newVal, oldVal){},
      deep: false, // 是否监听该数据内部属性的变化，默认 false
      immediate: false // 是否立即执行一次 handler，默认 false
    }
    // 观察 this.$route.params 的变化，变化后，会调用该函数
    ["$route.params"](newVal, oldVal){
      // newVal：this.$route.params 新的值，等同 this.$route.params
      // oldVal：this.$route.params 旧的值
    },
  	// 完整写法
    ["$route.params"]: {
      handler(newVal, oldVal){},
      deep: false, // 是否监听该数据内部属性的变化，默认 false
      immediate: false // 是否立即执行一次 handler，默认 false
    }
  }
}
```


