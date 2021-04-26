<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
// import { showMessage } from "@/utils";
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "评论成功",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: function(){
          console.log('完成');
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  background: lightblue;
  width: 300px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>