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

// GET (Single by id)
const getOneUser = (req, res) => {
    const id = parseInt(req.params.id);
    connect.pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id], (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).json(results.rows);
    })
}

// POST
const createUser = (req, res) => {
    const { name, email, phone} = req.body;
    connect.pool.query(`INSERT INTO ${table} (name, email, phone) VALUES ($1, $2, $3)`, [name, email, phone], (err, results) => {
        if (err) {
            throw err;
        }

        res.status(201).send(`Added user with name: ${name}.`)
    })
}

// DELETE 
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, phone} = req.body;
    connect.pool.query(`DELETE FROM ${table} WHERE id = $1`, [id], (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send(`Deleted user with id: ${id}`)
    });
}

module.exports = {
    getUser,
    getOneUser,
    createUser,
    deleteUser
}