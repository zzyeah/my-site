<template>
  <div class="test-container">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import '@/styles/global.less';
export default {
  components: { Menu },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 400px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
  padding-top: 200px;
}
</style>