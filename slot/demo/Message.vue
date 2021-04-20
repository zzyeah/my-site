<template>
  <div class="message-container">
      <div class="content"></div>
      <button>确定</button>
      <button>关闭</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.message-container{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid;
    padding: 20px;
}
</style>