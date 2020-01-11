const Pool = require("pg").Pool;

const pool = new Pool({
    user: config.env.DB_USER,
    host: config.env.DB_HOST,
    database: config.env.DB_NAME,
    password: config.env.DB_PASSWORD,
    port: config.env.DB_PORT,
})

module.exports = {
    pool
}