import express from 'express';
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.get("/", (req, res) => {
    const q = "SELECT * FROM servicer_rankings"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log("Connected to the backend.")
})