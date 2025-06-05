import { Router } from "express";
import { authenticate, verifyUser } from "../controllers/auth.controller.js";
import limiter from "../middleware/limiter.middleware.js";

const router = Router();

router.post("/access", limiter, authenticate);
router.get("/verify", verifyUser);

export default router;
