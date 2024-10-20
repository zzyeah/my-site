import axios from "axios";
import showMessage from "../utils/showMessage";
import { AUTHORIZATION } from "../constants/localStorage.constant";

const ins = axios.create({
  baseURL: process.env.VUE_APP_Server,
  withCredentials: true
}); // 创建一个axios的实例
ins.interceptors.response.use(async (resp) => {
  if (typeof resp.data === "string") return resp.data;
  const authorization = resp.headers[AUTHORIZATION];
  if (authorization) {
    localStorage.setItem(AUTHORIZATION, authorization);
  }
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    throw resp.data;
  }
  return resp.data.data;
});

ins.interceptors.request.use(async (config) => {
  const authorization = localStorage.getItem(AUTHORIZATION);
  if (authorization && config.headers)
    config.headers[AUTHORIZATION] = `Bearer ${authorization}`;
  return config;
});

export default ins;
