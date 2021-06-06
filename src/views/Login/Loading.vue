<template>
  <div class="loading-container">
    <div class="content">
      <h1>正在登录中...</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$store.watch(
      () => this.$store.getters["login/status"],
      (status) => {
        console.log(this.$route);
        if (status !== "loading") {
          this.$router.push(this.$route.query.returnurl || "/").catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  position: relative;
  height: 100vh;
  .content {
    .self-center();
  }
}
</style>
