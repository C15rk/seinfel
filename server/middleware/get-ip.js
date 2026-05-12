// 引入 axios 和数据库连接
import axios from 'axios';
import { db } from '../db.js';

export default defineEventHandler(async (event) => {
    const path = event.req.url;
    if (!path.startsWith('/api/saveip')) {
        return;
    }
    console.log(1)
    // 获取 IP 地址
    let ip = event.req.headers['x-forwarded-for'] || event.req.socket.remoteAddress;
    if (ip && ip.includes(',')) {
        ip = ip.split(',')[0];
    }

    try {

        // 查询 IP 地址信息
        const response = await axios.get(`http://ip-api.com/json/${ip}?lang=zh-CN`);
        let country = response.data.country || '未知';
        let regionName = response.data.regionName || '未知';

        // 将IP和国家保存到请求对象中，供后续使用
        event.req.userIp = ip;
        event.req.userCountry = country;
        event.req.regionName = regionName;

        const checkQuery = `
            SELECT count FROM visitors WHERE regionName = ? AND country = ?;
        `;
        const result = await db.execute(checkQuery, [regionName, country]);
        if (result.length > 0 && result[0].count > 0) {
            // 如果存在，更新count
            const updateQuery = `
                UPDATE visitors SET count = count + 1, ip = ? WHERE regionName = ? AND country = ?;
            `;
            await db.execute(updateQuery, [ip, regionName, country]);  // 正确顺序和变量
            console.log(country,regionName,'Record updated based on IP.');
        } else {
            // 如果不存在，插入新记录
            const insertQuery = `
                INSERT INTO visitors (ip, country, regionName, count) VALUES (?, ?, ?, 1);
            `;
            await db.execute(insertQuery, [ip, country, regionName]);
            console.log(country,regionName,'New record inserted.');
        }
    } catch (error) {
        console.error("Error fetching or saving IP info:", error);
        event.req.userIp = ip;
        event.req.userCountry = '错误';
        event.req.regionName = '错误';
    }
});
