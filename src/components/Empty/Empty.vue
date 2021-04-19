<template>
  <div class="empty-container">
    <div class="icon">
      <icon :type="'empty'" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
  components: { Icon },
  props: {
    // 显示的文字
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@size: 25px;
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  .icon-container {
    font-size: 100px;
  }
}
</style>