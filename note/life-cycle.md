组件的生命周期
创建-> 挂载-> 更新-> 销毁
hook 钩子函数 

beforeCreate    实例被创建之后 注入之前
注入：完成数据响应式，并把响应式的数据提到vue实例里面

created         生成VNode之前 注入之后

beforeMount     生成真实DOM之前 生成VNode之后

mounted         生成真实DOM之后

beforeUpdate    已挂载&数据变动之后 重新渲染之前 拿到的是原DOM元素

updated         重新渲染之后

beforeDestroy   销毁前

destroyed       销毁后