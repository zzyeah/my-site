import
指定src目录
in style
  - ~@
  
in script 
  - @



v-if 修改虚拟节点，true生成vnode，false不生成vnode
 - 节点少

v-show 都生成vnode false添加样式 display: none
 - 树稳定

vue渲染效率
1. 渲染的节点越小，效率越高
2. 树越稳定，效率越高
3. v-show: 显示状态变化频繁的情况下使用，以保持树的稳定
4. v-if: 显示状态变化较少时使用，以减少树的节点和渲染量。

**面试题：v-if 和 v-show 有什么区别？**

```
v-if能够控制是否生成vnode，也就间接控制了是否生成对应的dom。当v-if为true时，会生成对应的vnode，并生成对应的dom元素；当其为false时，不会生成对应的vnode，自然不会生成任何的dom元素。
v-show始终会生成vnode，也就间接导致了始终生成dom。它只是控制dom的display属性，当v-show为true时，不做任何处理；当其为false时，生成的dom的display属性为none。
使用v-if可以有效的减少树的节点和渲染量，但也会导致树的不稳定；而使用v-show可以保持树的稳定，但不能减少树的节点和渲染量。
因此，在实际开发中，显示状态变化频繁的情况下应该使用v-show，以保持树的稳定；显示状态变化较少时应该使用v-if，以减少树的节点和渲染量。
```