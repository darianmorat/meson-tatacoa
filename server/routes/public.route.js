import { Router } from "express";
import { getSliders, getMenu } from "../controllers/public.controller.js";

const router = Router();

router.get("/sliders", getSliders);
router.get("/menu", getMenu);

export default router;
