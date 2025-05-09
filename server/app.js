import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import publicRoute from "./routes/public.route.js";
import privateRoute from "./routes/private.route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/public", publicRoute);
app.use("/private", privateRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Listeting in PORT: ${PORT}`);
});
