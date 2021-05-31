// import Home from '@/views/Home';
// import About from '@/views/About';
// import Blog from '@/views/Blog';
// import Project from '@/views/Project';
// import Message from '@/views/Message';
// import BlogDetail from "@/views/Blog/Detail";

export default [
    {
        name: "Home", path: '/', component: () => import(/* webpackChunkName: "home" */"@/views/Home"), meta: {
            title: '首页',
        }
    },
    {
        name: "About", path: '/about', component: () => import(/* webpackChunkName: "about" */"@/views/About"), meta: {
            title: '关于我',
        }
    },
    {
        name: "Project", path: '/project', component: () => import(/* webpackChunkName: "project" */"@/views/Project"), meta: {
            title: '项目&效果',
        }
    },
    {
        name: "Blog", path: '/blog', component: () => import(/* webpackChunkName: "blog" */"@/views/Blog"), meta: {
            title: '文章',
        }
    },
    {
        name: "CategoryBlog", path: '/blog/cate/:categoryId', component: () => import(/* webpackChunkName: "blog" */"@/views/Blog"), meta: {
            title: '文章',
        }
    },
    {
        name: "BlogDetail", path: '/blog/:id', component: () => import(/* webpackChunkName: "blogdetail" */"@/views/Blog/Detail"), meta: {
            title: '文章详情',
        }
    },
    {
        name: "Message", path: '/message', component: () => import(/* webpackChunkName: "message" */"@/views/Message"), meta: {
            title: '留言板',
        }
    },
]