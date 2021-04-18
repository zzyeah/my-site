<template>
  <div>
    <h1>App组件</h1>
    <icon 
    type="home"
    />
    <icon 
    type="arrowDown"
    />
  </div>
</template>

<script>
import Icon from "./components/Icon.vue";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Icon,
  },
};
</script>

<style scoped>
/* 父组件对子组件的根元素进行样式影响 */
.iconfont {
  font-size: 26px;
  color: red;
}
</style>