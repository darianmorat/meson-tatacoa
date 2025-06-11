const { sliderModel, menuModel } = require("../models/db.model");

const getSliders = async (req, res) => {
   try {
      const result = await sliderModel.get();

      res.status(200).json({
         success: true,
         data: result[0],
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

const getMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;

      const result = await menuModel.get(categoryName);

      res.status(200).json({
         success: true,
         data: result[0],
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

module.exports = {
   getSliders,
   getMenu,
};
