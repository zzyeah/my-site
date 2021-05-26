// const listeners = {};

// // 事件总线
// export default {
//     // 监听某一个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     // 取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }

/**
 * {
 *   "event1": [handler1, handler2],
 *   "event2": [handler1, handler2]
 * }
 */

import Vue from 'vue';

/**
 * 事件名：mainScroll
 * 含义：著区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 */

// export default new Vue({});
Vue.prototype.$bus = new Vue({});