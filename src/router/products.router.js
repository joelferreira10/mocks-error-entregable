import { Router } from "express";
import { productsController,productsControllerManual} from "../controllers/products.controller.js";

const router=Router()

router.post('/mockingproducts',productsController)
router.post('/manual',productsControllerManual)

export default router