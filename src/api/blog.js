import request from './request';

/**
 * 获取博客列表数据
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    console.log(page, limit, categoryid);
    console.log('执行获取博客');
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}

export async function getBlogCategories() {
    return await request.get('/api/blogtype');
}