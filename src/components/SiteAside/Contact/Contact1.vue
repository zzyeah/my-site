<template>
  <div class="contact-container">
    <div class="content" v-for="c in content" :key="c.id">
      <a :href="c.href || '#'">
        <icon class="c-icon" :type="c.type" />
        <div class="c-name">{{ c.name }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
  components: { Icon },
  data() {
    return {
      content: [
        {
          type: "github",
          name: "zzyeah",
          id: 5417,
          href: "https://github.com/zzyeah/",
        },
        {
          type: "mail",
          name: "541767316@qq.com",
          id: 7595,
          href: "mailto:541767316@qq.com",
        },
        {
          type: "qq",
          name: "541767316",
          id: "316",
          href:
            "tencent://message/?Menu=yes&uin=541767316&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
        },
        {
          type: "weixin",
          name: "我也不知道",
          id: 558,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var.less";
.contact-container {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    align-items: center;
    padding-top: 15px;
    a {
      color: @gray;
      text-decoration: none;
        transition: color 1s;
      &:hover {
        color: @primary;
        transition: color 1s;
      }
      .c-icon {
        margin: 10px 5px;
      }
      .c-name {
        display: inline-block;
      }
    }
  }
}
</style>