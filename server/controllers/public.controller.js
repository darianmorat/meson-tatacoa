import { menuModel, sliderModel } from "../models/db.model.js";

export const getSliders = async (req, res) => {
   try {
      const result = await sliderModel.get();

      res.status(200).json({
         success: true,
         data: result.rows,
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};

export const getMenu = async (req, res) => {
   try {
      const { categoryName } = req.query;

      const result = await menuModel.get(categoryName);

      res.status(200).json({
         success: true,
         data: result.rows,
      });
   } catch (e) {
      res.status(500).json({
         success: false,
         message: "server error",
      });
   }
};
