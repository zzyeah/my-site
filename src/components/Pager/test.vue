<template>
  <div>
    <h1>App组件</h1>
    <pager
      :current="current"
      :total="total"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./Pager.vue";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    // 页码变化
    handlePageChange(newPage) {
      this.current = newPage;
      console.log('加载页数据');
    },
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