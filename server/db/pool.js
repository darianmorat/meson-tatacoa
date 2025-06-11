const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const pool = mysql.createPool({
   uri: process.env.DATABASE_URL,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

module.exports = pool;
