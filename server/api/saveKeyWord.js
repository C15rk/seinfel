import {db} from '../db.js'
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    let keyWord=query.keyWord
    if (!keyWord) {
        return createError({ statusCode: 400, statusMessage: 'keyWord parameter is required' });
    }
    try {
        // 检查数据库中是否存在该名字
        const rows = await db.execute('SELECT * FROM keyword WHERE keyWord = ?', [keyWord]);

        if (rows.length > 0) {
            // 如果存在，更新查询次数
            await db.execute('UPDATE keyword SET count = count + 1 WHERE keyWord = ?', [keyWord]);
            return { message: 'Count updated successfully', keyWord, newCount: rows[0].count + 1 };
        } else {
            // 如果不存在，插入新记录
            await db.execute('INSERT INTO keyword (keyWord, count) VALUES (?, 1)', [keyWord]);
            return { message: 'Name added successfully', keyWord, newCount: 1 };
        }
    } catch (error) {
        console.log(error.message)
        // 处理可能的错误
        return createError({ statusCode: 500, statusMessage: 'Database operation failed', error: error.message });
    }
});
