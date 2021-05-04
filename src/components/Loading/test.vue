<template>
  <div class="test-container" style="position: relative">
    <loading v-if="isLoading" />
    <button @click="isLoading = !isLoading">切换效果</button>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
export default {
  components: { Loading },
  data() {
    return { isLoading: true };
  },
};
</script>

<style>
</style>