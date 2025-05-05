import { Router } from "express";
import { authenticate } from "../controllers/private.controller.js";

const router = Router();

router.post("/access", authenticate);

export default router;
