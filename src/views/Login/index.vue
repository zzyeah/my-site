<template>
  <div class="login-container">
    <div class="login-form">
      <div v-if="status === 'unlogin'">
        <div class="login">
          <span>用户名:</span>
          <input type="text" v-model="loginId" />
        </div>
        <div class="pwd">
          <span>密码:</span>
          <input type="password" v-model="loginPwd" />
        </div>
        <div class="captcha">
          <span>验证码:</span>
          <input type="text" v-model="captchaVal" />
          <div v-html="data" v-show="data"></div>
        </div>
        <button @click="login">登录</button>
        {{ msg }}
      </div>
      <div v-if="status === 'login'">
        <span>用户信息</span>
        <div v-for="u in userInfo" :key="u">{{ u }}</div>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import fetchData from "@/mixins/fetchData.js";
import * as userApi from "@/api/login";
export default {
  mixins: [fetchData()],
  data() {
    return {
      loginId: null,
      loginPwd: null,
      captchaVal: null,
      remember: false,
    };
  },
  computed: {
    ...mapGetters("login", ["status", "captcha"]),
    ...mapState("login", ["userInfo", "msg"]),
  },
  methods: {
    async fetchData() {
      const result =  await userApi.captcha();
      return result
    },
    login() {
      this.$store
        .dispatch("login/login", {
          loginId: this.loginId,
          loginPwd: this.loginPwd,
          captcha: this.captchaVal,
          remember: this.remember,
        })
        .then((resp) => {
          console.log('resp');
          console.log(resp);
          
          if (resp) {
            this.$router.push({ name: "Home" });
          }
        });
    },
    logout() {
      this.$store.dispatch("login/logout");
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  height: 100vh;
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2xp solid;
    box-sizing: border-box;
  }
}
</style>
