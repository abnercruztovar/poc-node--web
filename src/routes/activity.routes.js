import { Router } from "express";
import { methods as activityController } from "../controllers/activity.controller.js";


const router = Router();

router.get("/", activityController.getActivities);
router.get("/:id", activityController.getActivity);
router.post("/", activityController.addActivity);
router.delete("/:id",activityController.deleteActivity);
router.put("/",activityController.updateActivity);

export default router;
    