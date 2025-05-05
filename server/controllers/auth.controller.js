import { jwtGenerator } from "../utils/jwtGenerator.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res) => {
   try {
      const { password } = req.body;

      if (password != process.env.ADMIN_PASSWORD) {
         return res.status(401).json({
            success: false,
            message: "Contraseña incorrecta",
         });
      }

      res.status(200).json({
         success: true,
         message: "Autenticacion exitosa",
         token: jwtGenerator(),
      });
   } catch (error) {
      res.status(500).json({ success: false, message: "server error" });
   }
};

export const verifyUser = async (req, res) => {
   try {
      const token = req.header("token");

      if (!token) {
         return res.status(401).json({ success: false, message: "Not authorized" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ success: true });
   } catch (e) {
      if (e.name === "TokenExpiredError") {
         return res
            .status(401)
            .json({ success: false, message: "Tu sesion a expirado", e });
      }
      res.status(403).json({ success: false, message: "Invalid token" });
   }
};
