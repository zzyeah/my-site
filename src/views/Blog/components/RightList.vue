<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <right-list :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect:false} ] } ]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
        this.$emit('select', item)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  cursor: pointer;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    .active {
      color: @warn;
      font-size: bold;
    }
  }
}
</style>