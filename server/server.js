const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./gik339.db");

const express = require("express");
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use((req, res, next) => {
    res.header("Access-Controll-Allow-Origin", "*");
    res.header("Access-Controll-Allow-Headers", "*");
    res.header("Access-Controll-Allow-Methods", "*");

    next();
  });

server.listen(3000, () => {
    console.log("Server is running")
});

server.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    db.all(sql, (err, rows) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
    })
})