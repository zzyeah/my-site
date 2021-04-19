<template>
  <div class="site-aside-container">
    <avatar :url="'http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c'" />
    <h1 class="title">好家伙啊兄弟</h1>
    <Menu />
    <contact />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "../Avatar/Avatar.vue";
import Contact from "./Contact/Contact.vue";
import Menu from "./Menu/Menu.vue";
export default {
  components: { Avatar, Menu, Contact },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer{
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>