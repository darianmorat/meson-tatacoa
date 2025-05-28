import { menuModel, sliderModel } from "../models/db.model.js";

export const createSlider = async (req, res) => {
   try {
      const { imageUrl } = req.body;

      await sliderModel.create(imageUrl);

      res.status(201).json({
         success: true,
         message: "image created successfully",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const deleteSlider = async (req, res) => {
   try {
      const { id } = req.params;

      await sliderModel.delete(id);

      res.status(200).json({
         success: true,
         message: "image deleted successfully",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const editMenu = async (req, res) => {
   try {
      const { name, price, description, imageUrl } = req.body;
      const { id } = req.params;

      await menuModel.edit(name, price, description, imageUrl, id);

      res.status(201).json({
         success: true,
         message: "item updated succesfully",
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const createMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;
      const { name, price, description, imageUrl } = req.body;

      const categories = await menuModel.category(categoryName);
      const categoryId = categories.rows[0].id;

      await menuModel.create(categoryId, name, price, description, imageUrl);

      res.status(201).json({
         success: true,
         message: "Item created successfully",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const deleteMenu = async (req, res) => {
   try {
      const { id } = req.params;

      await menuModel.delete(id);

      res.status(200).json({
         success: true,
         message: "item deleted successfully",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
