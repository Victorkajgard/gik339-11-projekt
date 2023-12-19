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
});

server.get("/players/:id", (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM players WHERE id = ${id}`;

    db.all(sql, (err, rows) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(rows[0]);
        }
    })
})

server.post("/players", (req, res) => {
    const player = req.body;
    const sql = `INSERT INTO players(firstName, lastName, team, position, teamcolor1, teamcolor2) VALUES
    (?,?,?,?,?,?)`;

    db.run(sql, Object.values(player), (err) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send("Spelaren sparades")
        }
    });
});

server.put("/players", (req, res) => {
    const bodyData = req.body;

    const id = bodyData.id;
    const player = {
        firstName: bodyData.firstName,
        lastName: bodyData.lastName,
        team: bodyData.team,
        position: bodyData.position, 
        teamcolor1: bodyData.teamcolor1,
        teamcolor2: bodyData.teamcolor2
    };

    // res.send(player);
    let updateString = "";
    const columnsArray = Object.keys(player);
    columnsArray.forEach((column, i) => {
        updateString += `${column}="${player[column]}"`;
        if(i !== columnsArray.length -1) updateString += ', '

    });
    
    const sql = `UPDATE players SET ${updateString} WHERE id=${id}`;

    db.run(sql, (err) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send("Spelaren uppdaterades")
        }
    });
});

server.delete("/players/:id", (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM players WHERE id=${id}`;

    db.run(sql, (err) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send("Spelaren borttagen")
        }
    });
})