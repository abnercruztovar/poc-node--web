import { Router } from "express";
import { methods as productController } from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.addProduct);
router.delete("/:id",productController.deleteProduct);
router.put("/",productController.updateProduct);

export default router;
