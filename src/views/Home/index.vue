<template>
  <div class="home-container">
    <ul>
      <li v-for="item in banners" :key="item.id">
        <img :src="item.midImg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getBanner } from "@/api/banner";
export default {
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanner();
  },
};
</script>

<style>
</style>