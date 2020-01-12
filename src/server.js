const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const query = require("./queries");
const port = 8080;

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.json({Info: 'Welcome, this is where I make magic with Node.js!'})
})

app.get("/users", query.getUser);

app.listen(port, () => {
    console.log(`Server running on localhost ${port} now!`);
})