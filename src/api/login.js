import { md5 } from "js-md5";
import request from "./request";
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export async function login(payload) {
  /**
   *
   * @param {*} param0
   */
  class LoginRequest {
    constructor({ loginId, loginPwd, captcha, remember }) {
      this.loginId = loginId;
      this.loginPwd = md5(loginPwd);
      this.captcha = captcha;
      this.remember = remember ? 7 : undefined;
    }
  }

  const res = await request.post("/api/admin/login", new LoginRequest(payload));
  // await delay(1000);
  if (res) {
    const userInfo = {
      loginId,
      name: "handler",
    };
    localStorage.setItem("user", JSON.stringify(res));
    return userInfo;
  }
  return undefined;
}

export async function logout() {
  await delay(1000);
  const user = localStorage.getItem("user");
  if (user) {
    localStorage.removeItem("user");
    return "已成功删除";
  }
  return "并未登录";
}

export async function captcha() {
  return request.get("/res/captcha");
}

export async function whoAmI() {
  await delay(1000);
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
}
