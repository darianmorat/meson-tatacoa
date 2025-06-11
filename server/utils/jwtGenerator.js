const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function jwtGenerator() {
   return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
