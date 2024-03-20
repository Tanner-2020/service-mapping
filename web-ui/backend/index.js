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
    res.json("Hello, this is the backend.")
})

app.get("/employees", (req, res) => {
    const q = "SELECT * FROM employees"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to the backend.")
})