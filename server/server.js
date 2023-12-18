const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./gik339.db");

const express = require("express");
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
  });

server.listen(3000, () => {
    console.log("Server is running")
});

server.get("/players", (req, res) => {
    const sql = "SELECT * FROM players";

    db.all(sql, (err, rows) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
    })
})