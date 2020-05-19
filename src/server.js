const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const query = require("./queries");
const port = 8080;

app.use(bodyParser.json())

app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.json({Info: 'Welcome, this is where I make magic with Node.js!'})
})

// Get all users
app.get("/users", query.getUser);

// Get a single user
app.get("/users/:id", query.getOneUser);

// Post a user
app.post("/users", query.createUser);

// Delete a user
app.delete("/users/:id", query.deleteUser);

app.listen(port, () => {
    console.log(`Server running on localhost ${port} now!`);
})