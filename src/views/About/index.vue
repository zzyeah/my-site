<template>
  <div class="about-container" v-loading="!srcLoaded">
    <iframe
      class="about-content"
      :src="src"
      frameborder="0"
      @load="handleIFrame"
      ref="iframe"
      v-show="srcLoaded"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", { src: "data", loading: "loading" }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  methods: {
    handleIFrame(params) {
      const success = this.isLoadSuccess(this.$refs.iframe.src);
      if (!success) {
        return this.$router.push("/404");
      }
      this.srcLoaded = true;
    },
    isLoadSuccess(isrc) {
      return this.src === isrc;
    },
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>