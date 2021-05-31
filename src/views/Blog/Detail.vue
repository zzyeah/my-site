<template>
  <layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <blog-detail :blog="data" v-if="data" />
      <blog-comment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout/Layout.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";

export default {
  components: { Layout, BlogTOC, BlogDetail, BlogComment },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if(!resp){
        // 文章不存在
        this.$router.push("/404");
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>