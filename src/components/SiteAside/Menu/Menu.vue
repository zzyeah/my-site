<template>
  <nav class="menu-container">
    <router-link
      :exact="item.exact"
      :to="{ name: item.name }"
      v-for="item in items"
      :key="item.link"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "../../Icon/Icon.vue";
export default {
  components: { Icon },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          // startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
          exact: false, // 激活状态是否精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      let link = item.link.toLowerCase(); // 菜单的链接地址
      let curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%);
    }
  }
}
</style>