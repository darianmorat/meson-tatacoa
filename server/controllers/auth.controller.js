const jwtGenerator = require("../utils/jwtGenerator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authenticate = async (req, res) => {
   try {
      const { password } = req.body;
      const adminPassword = process.env.ADMIN_PASSWORD;

      const isValid = bcrypt.compareSync(password, adminPassword);

      if (!isValid) {
         return res.status(401).json({
            success: false,
            message: "Contraseña incorrecta",
         });
      }

      res.status(200).json({
         success: true,
         message: "Autenticación exitosa",
         token: jwtGenerator(),
      });
   } catch (error) {
      res.status(500).json({ success: false, message: "server error" });
   }
};

const verifyUser = async (req, res) => {
   try {
      const token = req.header("token");

      if (!token) {
         return res.status(401).json({ success: false, message: "No autorizado" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
         res.status(200).json({ success: true });
      }
   } catch (e) {
      if (e.name === "TokenExpiredError") {
         return res
            .status(401)
            .json({ success: false, message: "Tu sesión ha expirado" });
      }
      res.status(403).json({ success: false, message: "Token inválido" });
   }
};

module.exports = {
   authenticate,
   verifyUser,
};
