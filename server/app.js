import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import adminRoute from "./routes/admin.route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/admin", adminRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Listeting in PORT: ${PORT}`);
});
