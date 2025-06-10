import pool from "../db/pool.js";

export const sliderModel = {
   get: async () => {
      return pool.query(
         ` 
            select * from slider_imgs
         `,
      );
   },

   create: async (imageUrl) => {
      return pool.query(
         ` 
         insert into slider_imgs 
         (image_url) values (?) 
      `,
         [imageUrl],
      );
   },

   delete: async (id) => {
      return pool.query(
         `
         delete from slider_imgs where 
         id = ?
      `,
         [id],
      );
   },
};

export const menuModel = {
   get: async (categoryName) => {
      return pool.query(
         `
            select * from menu_items where 
            category_id = (
               select id from categories where 
               name = ?
            )
         `,
         [categoryName],
      );
   },

   category: async (categoryName) => {
      return pool.query(
         `
         select id from categories where 
         name = ?
      `,
         [categoryName],
      );
   },

   edit: async (name, price, description, imageUrl, id) => {
      return pool.query(
         `
         update menu_items set 
         name = ?, 
         price = ?, 
         description = ?, 
         image_url = ? 
         where id = ? 
      `,
         [name, price, description, imageUrl, id],
      );
   },

   create: async (categoryId, name, price, description, imageUrl) => {
      return pool.query(
         `
         insert into menu_items (
            category_id, 
            name, 
            price, 
            description, 
            image_url
         ) 
         values (?, ?, ?, ?, ?)
      `,
         [categoryId, name, price, description, imageUrl],
      );
   },

   delete: async (id) => {
      return pool.query(
         `
         delete from menu_items 
         where id = ?
      `,
         [id],
      );
   },
};
