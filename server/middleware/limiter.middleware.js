const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
   windowMs: 5 * 60 * 1000,
   limit: 5,
   standardHeaders: true,
   legacyHeaders: false,
});
