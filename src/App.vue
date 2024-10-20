<template>
  <div class="app-container">
    <layout>
      <template #left>
        <div class="aside">
          <site-aside />
        </div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </layout>
    <to-top />
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";
import SiteAside from "./components/SiteAside/SiteAside.vue";
import ToTop from "./components/ToTop/ToTop.vue";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "./styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
 }
</style>