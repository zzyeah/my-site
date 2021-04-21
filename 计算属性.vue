<template>
  <div>
    <h1>App组件</h1>
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>姓名：{{ getFullName() }}</p>
    <p>姓名：{{ fullName }}</p>
    <button @click="fullName='烨烨'">修改姓名为烨烨</button>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
  },
  data() {
    return {
      firstName: "ye",
      lastName: "ye",
    };
  },
  methods: {
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(val) {
        console.log("正在设置全名", val);
        this.firstName = val[0];
        this.lastName = val.substr(1);
      },
    },
  },
};
</script>
