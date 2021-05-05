<template>
  <!-- <div class="blog-container"> -->
  <layout>
    <blog-list />
    <template #right>
      <blog-category />
    </template>
  </layout>
  <!-- </div> -->
</template>

<script>
import Layout from "../../components/Layout/Layout.vue";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
  created() {
    // console.log(this.$route);
  },
};
</script>

<style>
</style>