import { Router } from "express";
import { methods as assignController } from "../controllers/assign.controller.js";

const router = Router();

router.get("/", assignController.assignByActivities);

export default router;
