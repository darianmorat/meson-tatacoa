import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res, next) => {
   try {
      // WHICH ONE HERE SHOULD I LEAVE TO CHECK IN THE BACKEND

      const token = req.header("token");
      if (!token) {
         return res.status(401).json({ success: false, message: "Permiso denegado" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
         next();
      }
   } catch (e) {
      res.status(403).json({ success: false, message: "Permiso denegado" });
   }
};
