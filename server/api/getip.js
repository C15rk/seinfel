import { db } from '../db.js';
import {stringify} from "devalue";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const limit = parseInt(query.limit, 10) || 10;  // 默认每页10条
    const page = parseInt(query.page, 10) || 1;  // 默认第1页
    const offset = (page - 1) * limit;

    try {
        const sql = 'SELECT * FROM visitors LIMIT ? OFFSET ?';
        const sql2 = 'SELECT * FROM visitors';
        const results = await db.execute(sql, [String(limit), String(offset)]);
        const results2 = await db.execute(sql2);
        let total=results2.length
        let sum=0
        results2.forEach(item=>{
            sum+=item.count
        })
        return { message: '成功', results,total,sum };
    } catch (error) {
        console.log(error.message,'发生错误')
        // 处理可能的错误
        return createError({ statusCode: 500, message: '出错', error: error.message });
    }
});
