import { db } from '../db.js';
import {stringify} from "devalue";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    // const limit = parseInt(query.limit, 10) || 10;  // 默认每页10条
    // const page = parseInt(query.page, 10) || 1;  // 默认第1页
    // const offset = (page - 1) * limit;

    try {
        const sql = 'SELECT * FROM keyword';
        const results = await db.execute(sql);
        return { message: '成功', results };
    } catch (error) {
        console.log(error.message);
        // 处理可能的错误
        return createError({ statusCode: 500, message: '出错', error: error.message });
    }
});
