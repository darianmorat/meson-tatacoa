import { Router } from "express";
import { getMenu } from "../controllers/admin.controller.js";

const router = Router();

router.get("/", getMenu);

export default router;
