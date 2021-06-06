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
        <button @click="handleClick">登录</button>
        {{ msg }}
      </div>
      <div v-if="status === 'login'">
        <span>用户信息</span>
        <div v-for="u in userInfo" :key="u">{{ u }}</div>
        <button @click="handleLogout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      loginId: null,
      loginPwd: null,
    };
  },
  computed: {
    ...mapGetters("login", ["status"]),
    ...mapState("login", ["userInfo", "msg"]),
  },
  methods: {
    handleClick() {
      this.$store
        .dispatch("login/login", {
          loginId: this.loginId,
          loginPwd: this.loginPwd,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
    handleLogout() {
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
