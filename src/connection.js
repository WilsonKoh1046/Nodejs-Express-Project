const Pool = require("pg").Pool;

const dotenv = require("dotenv");
dotenv.config(); // to use variables from .env file

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

module.exports = {
    pool
}