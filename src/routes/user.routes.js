import { Router } from "express";
import { methods as userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getUsers);
router.get("/", userController.getUser);
router.post("/", userController.addUser);
router.put("/", userController.updateUser);
router.delete("/", userController.deleteUser);

export default router;
