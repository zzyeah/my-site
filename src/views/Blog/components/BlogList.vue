<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <pager
      :current="routeInfo.page"
      v-if="data.total"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager/Pager.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchData({})],
  components: { Pager },
  computed: {
    // 获取路由信息
    routeInfo() {
      const { categoryId = -1 } = this.$route.params;
      const { page = 1, limit = 10 } = this.$route.query;
      return {
        categoryId: +categoryId,
        page: +page,
        limit: +limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      const s = this.routeInfo;
      return await getBlogs(s.page, s.limit, s.categoryId);
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id 当前的页容量 newPage的页码
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /blog?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    $route: {
      async handler() {
        this.isLoading = true;
        // 滚动高度为0
        this.$refs.container.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading = false;
      },
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
