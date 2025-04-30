import { Router } from "express";
import { getData } from "../controllers/admin.controller.js";

const router = Router();

router.get("/", getData);

export default router;
