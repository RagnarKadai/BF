const Pool = require('pg').Pool;
const pool = new Pool({
    user: "karl",
    password: "DBA",
    database: "testwad",
    host: "localhost",
    port: "5432"
});
module.exports = pool;