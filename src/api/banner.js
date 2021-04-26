import request from './request';

export async function getBanner(){
    return await request.get('/api/banner');
}

getBanner().then(r=>{console.log(r);});