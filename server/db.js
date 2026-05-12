// db.js
import mysql from 'mysql2/promise';

// 创建一个函数来延迟创建连接池，直到第一次调用
let poolPromise = null;

function getPool() {
    if (!poolPromise) {
        poolPromise = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'seinfel',
            password: '123456'
        });
    }
    return poolPromise;
}

export const db = {
    async execute(query, params) {
        const pool = await getPool();
        const connection = await pool.getConnection();
        try {
            const [results] = await connection.execute(query, params);
            return results;
        } finally {
            connection.release();
        }
    }
};
