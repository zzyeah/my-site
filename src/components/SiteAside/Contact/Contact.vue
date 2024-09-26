<template>
  <ul class="contact-container">
    <li v-for="c in contents" :key="c.id">
      <a :href="c.href">
        <div
          class="icon"
          :class="{
            weixin: c.type === 'weixin',
          }"
        >
          <icon :type="c.type" />
        </div>
        <span>{{ c.name }}</span>
      </a>
      <div class="pop" v-if="c.src">
        <img :src="c.src" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon/Icon.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
    contents() {
      const resp = this.data;
      let list = [];
      for (let data in resp) {
        const temp = {};
        temp.type = data;
        temp.name = resp[data];
        temp.id = Math.floor((Math.random() + 1) * 10000000);
        switch (temp.type) {
          case "github":
            temp.href = `https://github.com/${temp.name}/`;
            break;
          case "mail":
            temp.href = `mailto:${temp.name}`;
            break;
          case "qq":
            temp.href = `tencent://message/?Menu=yes&uin=${temp.name}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`;
            temp.src = this.splicePath(resp["qqQrCode"]);
            break;
          case "weixin":
            temp.src = this.splicePath(resp["weixinQrCode"]);
            break;
        }

        const count = Object.keys(temp).length;
        temp.count = count;

        list.push(temp);
      }
      return list.filter((t) => t.count > 3);
    },
  },
  methods: {
    /**
     * 拼接路径
     * @param src String
     */
    splicePath(src) {
      if (!src) return src;
      return `${process.env.VUE_APP_Server}${src}`;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%, 50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: 0;
    }
  }
}
</style>