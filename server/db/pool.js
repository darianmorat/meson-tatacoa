import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const pool = mysql.createPool({
   uri: process.env.DATABASE_URL,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

export default pool;
