import { Router } from "express";
import { getMenu } from "../controllers/public.controller.js";

const router = Router();

router.get("/menu", getMenu);

export default router;
