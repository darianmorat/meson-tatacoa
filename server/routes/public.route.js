import { Router } from "express";
import { getSliderImgs, getMenu } from "../controllers/public.controller.js";

const router = Router();

router.get("/get-slider-imgs", getSliderImgs);
router.get("/get-menu", getMenu);

export default router;
