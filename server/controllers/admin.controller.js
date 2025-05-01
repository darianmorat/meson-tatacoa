import pool from "../db/pool.js";

export const getMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;

      const result = await pool.query(
         "select * from menu_items where category_id = (select id from categories where name = $1)",
         [categoryName],
      );
      const data = result.rows;

      res.status(200).json({ success: true, data });
   } catch (error) {
      res.status(500).json({ success: false, message: "server error" });
   }
};
