import { Router } from "express";
import KitchenController from "../controller/kitchen.controller";

const router = Router()

router.post("/create",KitchenController.createOrder)
router.post("/update",KitchenController.updateOrder)
router.post("/finish",KitchenController.finishOrder)
router.get("/all",KitchenController.getAllOrder)
// router.get("/all",OrderController.getAllOrder)

// router.get("/bycheckin/:id_checkin",OrderController.getOrderByCheckInId)

// router.get("/:id",OrderController.getOrder)

// router.put("/update/:id",OrderController.updateOrder)

// router.put("/delete/:id",OrderController.deleteOrder)

export default router