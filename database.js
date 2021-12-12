const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "11080024",
    database: "testwad",
    host: "localhost",
    port: "5432"
});
module.exports = pool;