<template>
  <div class="site-aside-container">
    <template v-if="data">
      <avatar :url="data && data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <contact v-if="data" />
    <p class="footer" v-if="data">{{ data.icp }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Avatar from "../Avatar/Avatar.vue";
import Contact from "./Contact/Contact.vue";
import Menu from "./Menu/Menu.vue";

export default {
  components: { Avatar, Menu, Contact },
  computed: mapState("setting", ["data"]),
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
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>