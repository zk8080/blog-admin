import request from '@/utils/request';

export async function getArticleList(params) {
    return request('/api/getArticleList', {
        method: 'get',
        params,
    });
}
export async function getFakeCaptcha(mobile) {
    return request(`/api/login/captcha?mobile=${mobile}`);
}
