import Mock from "mockjs";
import qs from 'querystring';

Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: '',
    "data|10-20": [
        {
            'id|+1': 1,
            name: '分类@id',
            "articleCount|0-300": 0,
            'order|+1': 1,
        }
    ]
});

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url);
    // console.log(query);
    return Mock.mock({
        code: 0,
        msg: '',
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                title: "@ctitle(1,50)",
                description: "描述@cparagraph(1,10)",
                category: {
                    'id|1-10': 0,
                    name: "分类@id"
                },
                'scanNumber|0-3000': 0,
                'commentNumber|0-300': 0,
                'thumb|1': [
                    "@image(300x250, @color, #fff, @natural)",
                    null,
                ],
                createDate: `@date('T')`
            }],
        },
    });
});

import blog from './blog-content';
Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', blog);

Mock.mock('/api/comment', 'post', {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
    },
})

Mock.mock(/^\/api\/comment\/?(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url);
    // console.log(query);
    return Mock.mock({
        code: 0,
        msg: '',
        data: {
            total: 52,
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                ],
            },],
        },
    });
})