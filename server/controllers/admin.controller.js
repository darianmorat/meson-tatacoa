import pool from "../db/pool.js";

export const getData = async (req, res) => {
   try {
      const result = await pool.query("select * from users");
      const total = result.rows;

      res.json({ total, message: "server working" });
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "server error" });
   }
};
