import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import Message from '@/views/Message';

export default [
    { name: "Home", path: '/', component: Home },
    { name: "About", path: '/about', component: About },
    { name: "Project", path: '/project', component: Project },
    { name: "Blog", path: '/blog', component: Blog },
    { name: "CategoryBlog", path: '/blog/cate/:categoryId', component: Blog },
    { name: "Message", path: '/message', component: Message },
]