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
      let count = 0;
      for (let data in resp) {
        let temp = {};
        temp.type = data;
        temp.name = resp[data];
        temp.id = Math.floor((Math.random() + 1) * 10000000);
        if (temp.type === "github") {
          temp.name = "zzyeah";
          temp.href = "https://github.com/zzyeah/";
        }
        if (temp.type === "mail") {
          temp.name = "541767316@qq.com";
          temp.href = "mailto:541767316@qq.com";
        }
        if (temp.type === "qq") {
          temp.name = "541767316";
          temp.href =
            "tencent://message/?Menu=yes&uin=541767316&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45";
          temp.src =
            "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png";
        }
        if (temp.type === "weixin") {
          temp.src =
            "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png";
          temp.name = "541767316";
        }
        count = 0;
        for (const i in temp) {
          if (temp.hasOwnProperty(i)) {
            count++;
            temp.count = count;
          }
        }
        list.push(temp);
      }
      return list.filter((t) => t.count > 3);
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