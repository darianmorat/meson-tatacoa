const { sliderModel, menuModel } = require("../models/db.model");

const createSlider = async (req, res) => {
   try {
      const { imageUrl } = req.body;

      await sliderModel.create(imageUrl);

      res.status(201).json({
         success: true,
         message: "Creación exitosa",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

const deleteSlider = async (req, res) => {
   try {
      const { id } = req.params;

      await sliderModel.delete(id);

      res.status(200).json({
         success: true,
         message: "Eliminación exitosa",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

const editMenu = async (req, res) => {
   try {
      const { name, price, description, imageUrl } = req.body;
      const { id } = req.params;

      await menuModel.edit(name, price, description, imageUrl, id);

      res.status(201).json({
         success: true,
         message: "Actualización exitosa",
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

const createMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;
      const { name, price, description, imageUrl } = req.body;

      const categories = await menuModel.category(categoryName);
      const categoryId = categories[0][0].id;

      await menuModel.create(categoryId, name, price, description, imageUrl);

      res.status(201).json({
         success: true,
         message: "Creación exitosa",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

const deleteMenu = async (req, res) => {
   try {
      const { id } = req.params;

      await menuModel.delete(id);

      res.status(200).json({
         success: true,
         message: "Eliminación exitosa",
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

module.exports = {
   createSlider,
   deleteSlider,
   editMenu,
   createMenu,
   deleteMenu,
};
