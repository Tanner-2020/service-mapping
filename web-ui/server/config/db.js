REACT_APP_USER = 'root'
REACT_APP_PASS = 'password'
REACT_APP_HOST = 'host'
REACT_APP_DB = 'database'

const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.REACT_APP_HOST,
    user: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_PASS,
    database: process.env.REACT_APP_DB
})

module.exports = db;