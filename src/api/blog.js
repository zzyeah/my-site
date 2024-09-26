import request from './request';

/**
 * 获取博客列表数据
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryId 
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    // console.log(page, limit, categoryid);
    // console.log('执行获取博客');
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId,
        },
    });
}

export async function getBlogCategories() {
    return await request.get('/api/blogtype');
}

/**
 * 
 * @param {*} id 
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {*} commentInfo 
 */
export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo);
}

export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogId,
            page,
            limit
        }
    })
}
