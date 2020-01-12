const connect = require("./connection");

const table = 'users';

// GET
const getUser = (req, res) => {
    connect.pool.query(`SELECT * FROM ${table}`, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUser
}