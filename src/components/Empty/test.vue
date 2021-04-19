<template>
  <div class="test-container">
    <empty />
  </div>
</template>

<script>
import Empty from "./Empty.vue";
export default {
  components: { Empty },
  name: "testEmp",
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>