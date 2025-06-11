const express = require("express");
const { getSliders, getMenu } = require("../controllers/public.controller");

const router = express.Router();

router.get("/sliders", getSliders);
router.get("/menu", getMenu);

module.exports = router;
