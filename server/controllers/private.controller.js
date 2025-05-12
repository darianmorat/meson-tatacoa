import pool from "../db/pool.js";

export const createSlider = async (req, res) => {
   try {
      const { imageUrl } = req.body;

      const result = await pool.query(
         ` 
            insert into slider_imgs 
            (image_url) values ($1) 
            returning *
         `,
         [imageUrl],
      );

      const newSlider = result.rows;

      res.status(201).json({
         success: true,
         message: "image created successfully",
         newSlider,
      });
   } catch (e) {}
};

export const deleteSlider = async (req, res) => {
   try {
      const { id } = req.params;

      await pool.query(
         `
            delete from slider_imgs where 
            id = $1 
            returning *
         `,
         [id],
      );

      res.status(200).json({ success: true, message: "image deleted successfully" });
   } catch (e) {
      res.status(500).json({ success: false, message: "server error" });
   }
};

export const editMenu = async (req, res) => {
   try {
      const { name, price, description, imageUrl } = req.body;
      const { id } = req.params;

      await pool.query(
         `
            update menu_items set 
            name = $1, 
            price = $2, 
            description = $3, 
            image_url = $4 
            where id = $5 
            returning *
         `,
         [name, price, description, imageUrl, id],
      );

      res.status(201).json({ success: true, message: "item updated succesfully" });
   } catch (error) {
      res.status(500).json({ success: false, message: "server error" });
   }
};

export const createMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;
      const { name, price, description, imageUrl } = req.body;

      const categories = await pool.query(
         `
            select id from categories where 
            name = $1
         `,
         [categoryName],
      );

      const categoryId = categories.rows[0].id;

      await pool.query(
         `
            insert into menu_items (
               category_id, 
               name, 
               price, 
               description, 
               image_url
            ) 
            values (
               $1, 
               $2, 
               $3, 
               $4, 
               $5
            )
         `,
         [categoryId, name, price, description, imageUrl],
      );

      res.status(201).json({
         success: true,
         message: "Item created successfully",
      });
   } catch (e) {
      res.status(500).json({ success: false, message: "server error" });
   }
};

export const deleteMenu = async (req, res) => {
   try {
      const { id } = req.params;

      await pool.query(
         `
            delete from menu_items 
            where id = $1
         `,
         [id],
      );

      res.status(200).json({ success: true, message: "item deleted successfully" });
   } catch (e) {
      res.status(500).json({ success: false, message: "server error" });
   }
};
