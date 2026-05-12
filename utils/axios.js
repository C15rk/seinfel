import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api', // 默认的API基地址
    headers: {
        'Content-Type': 'application/json',
    }
});

// 创建一个通用的请求方法
const makeRequest = async (method, url, { data, params, baseURL } = {}) => {
    try {
        const response = await axiosInstance({
            method: method,
            url: url,
            data: data,
            params: params,
            baseURL: baseURL || axiosInstance.defaults.baseURL,
        });
        return response.data; // 直接返回数据部分
    } catch (error) {
        // 这里可以加入更复杂的错误处理逻辑
        console.error('HTTP error', error);
        throw error; // 可以选择重新抛出错误，或者返回错误信息
    }
};

// 封装GET请求
export function get(url, params = {}, baseURL) {
    return makeRequest('get', url, { params, baseURL });
}

// 封装POST请求
export function post(url, data, baseURL) {
    return makeRequest('post', url, { data, baseURL });
}
