<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from "./ImageLoader.vue";
export default {
  components: { ImageLoader },
  methods: {
    handleLoad($event) {
      console.log('加载完成图片后 父组件触发函数');
      console.log($event);
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
