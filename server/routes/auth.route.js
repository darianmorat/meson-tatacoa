import { Router } from "express";
import { authenticate, verifyUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/access", authenticate);
router.get("/verify", verifyUser);

export default router;
