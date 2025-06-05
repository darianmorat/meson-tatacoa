import rateLimit from "express-rate-limit";

export default rateLimit({
   windowMs: 5 * 60 * 1000,
   limit: 5,
   standardHeaders: true,
   legacyHeaders: false,
});
