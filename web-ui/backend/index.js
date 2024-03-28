import express from 'express';
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.use(express.json())
app.use(cors())

app.get("/zip", (req, res) => {
    const q = "SELECT * FROM servicer_rankings"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/facility", (req, res) => {
    const q = "SELECT * FROM facility_locations LEFT JOIN servicer_rankings ON facility_locations.zip_code = servicer_rankings.zip_code"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/city", (req, res) => {
    const q = "SELECT * FROM location_zips LEFT JOIN servicer_rankings ON location_zips.zip_code = servicer_rankings.zip_code"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(process.env.LISTEN, () => {
    console.log("Connected to the backend.")
})