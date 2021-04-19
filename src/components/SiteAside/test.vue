<template>
  <div class="test-container">
      <site-aside />
  </div>
</template>

<script>
import SiteAside from './SiteAside.vue'
export default {
  components: { SiteAside },

}
</script>

<style>
.test-container{
    width: 250px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
</style>