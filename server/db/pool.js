import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();

const pool = new Pool({
   // connectionString: process.env.DATABASE_URL,
   user: "darianmorat",
   host: "localhost",
   database: "tatacoa",
   password: "2004",
   port: 5432,
});

export default pool;
