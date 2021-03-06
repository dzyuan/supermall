import axios from 'axios'

const request = axios.create({
    baseURL: 'http://47.105.222.69:6060/home',
    timeout: 5000,
    withCredentials: true   //设置此项  会携带跨域cookie
});

// 处理响应拦截
request.interceptors.response.use(res => {
    return res.data
})

export function swiperreq() {
    return request('/swiper')
}
export function recommreq() {
    return request('/recommend')
}

//req为配置对象，分别配置params：{  class: "新款",page: this.goods.popular.page,}
export function getPopularList(req) {
    return request(req)
}
