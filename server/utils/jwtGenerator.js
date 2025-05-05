import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function jwtGenerator() {
   return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "10s" });
}
