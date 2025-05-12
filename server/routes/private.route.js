import { Router } from "express";
import {
   createSlider,
   deleteSlider,
   editMenu,
   createMenu,
   deleteMenu,
} from "../controllers/private.controller.js";
import authorization from "../middleware/auth.middleware.js";

const router = Router();

router.post("/slider/create", authorization, createSlider);
router.delete("/slider/delete/:id", authorization, deleteSlider);

router.put("/menu/edit/:id", authorization, editMenu);
router.post("/menu/create", authorization, createMenu);
router.delete("/menu/delete/:id", authorization, deleteMenu);

export default router;
