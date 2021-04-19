<template>
  <div class="image-loader-container">
    <img v-if="!allDone" :src="placeholder" class="placeholder" />
    <img
      :src="src"
      @load="handleLoad()"
      :style="{
        opacity: opacityOrigin,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    // 原始图片的路径
    src: {
      type: String,
      required: true,
    },
    // 原始图片加载完成前的占位图片
    placeholder: {
      type: String,
      required: true,
    },
    // 原始图片加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false,
      allDone: false,
    };
  },
  computed: {
    opacityOrigin() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      console.log("加载好了");
      setTimeout(() => {
        this.allDone = true;
        this.$emit("load", this.allDone);
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill();
  }
  .placeholder{
    filter: blur(2vw);
  }
}
</style>