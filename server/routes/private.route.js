const express = require("express");
const {
   createSlider,
   deleteSlider,
   editMenu,
   createMenu,
   deleteMenu,
} = require("../controllers/private.controller");
const authorization = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/slider/create", authorization, createSlider);
router.delete("/slider/delete/:id", authorization, deleteSlider);

router.put("/menu/edit/:id", authorization, editMenu);
router.post("/menu/create", authorization, createMenu);
router.delete("/menu/delete/:id", authorization, deleteMenu);

module.exports = router;
