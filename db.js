const POOL = require('pg').Pool;

const pool = new POOL({
    user : 'postgres',
    host : 'localhost',
    database : 'students',
    password : 'Learn@1995',
    port : 5432,
});

module.exports = pool;