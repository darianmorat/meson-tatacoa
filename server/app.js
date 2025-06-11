const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth.route");
const publicRoute = require("./routes/public.route");
const privateRoute = require("./routes/private.route");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
   cors({
      exposedHeaders: ["RateLimit-Limit", "RateLimit-Remaining", "RateLimit-Reset"],
   }),
);

app.use("/auth", authRoute);
app.use("/public", publicRoute);
app.use("/private", privateRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Listeting in PORT: ${PORT}`);
});
