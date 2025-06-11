const express = require("express");
const { authenticate, verifyUser } = require("../controllers/auth.controller");
const limiter = require("../middleware/limiter.middleware");

const router = express.Router();

router.post("/access", limiter, authenticate);
router.get("/verify", verifyUser);

module.exports = router;
