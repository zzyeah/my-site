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

# 组件生命周期

<img src="http://mdrs.yuanjin.tech/img/20200908051939.png" alt="image-20200908051939745" style="zoom:50%;" />

<img src="http://mdrs.yuanjin.tech/img/20201206132819.png" alt="image-20201206132819263" style="zoom:50%;" />

# 常见应用

> 不要死记硬背，要根据具体情况灵活处理

## 加载远程数据

```js
export default {
  data(){
    return {
      news: []
    }
  },
  async created(){
    this.news = await getNews();
  }
}
```

## 直接操作DOM

```js
export default {
  data(){
    return {
      containerWidth:0,
    	containerHeight:0
    }
  },
  mounted(){
    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.containerHeight;
  }
}
```

## 启动和清除计时器

```js
export default {
  data(){
    return {
      timer: null
    }
  },
  created(){
    this.timer = setInterval(()=>{
     ... 
    }, 1000)
  },
  destroyed(){
    clearInterval(this.timer);               
  }
}
```

