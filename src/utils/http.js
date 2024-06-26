import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const baseUrl = '/'

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: baseUrl,
    // 超时
    timeout: 10000
})


service.interceptors.response.use(res => {
        const data = res.data
    },
    error => {
        return Promise.reject(error)
    }
)

function post(url,data,opt){
    return new Promise((resolve, reject) => {
        service.post(url, data,{timeout:0})
        .then(response => {
            return resolve(response.data)
        }).catch( e => {
            // console.error(e)
            return reject(e)
        })
    })
}


function get(url,data){
    return new Promise((resolve, reject) => {
        service.get(url, { params:data })
        .then(response => {
            return resolve(response.data)
        }).catch( e => {
            // console.error(e)
            return reject(e)
        })
    })
}

export { get }
export { post }