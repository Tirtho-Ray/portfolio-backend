import express from "express";

import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constsnt";
import validateRequest from "../../middlewares/validateRequest";
import { PurchaseValidation } from "./purchase.validation";
import { PurchaseController } from "./purchase.contoller";

const router = express.Router();


router.post(
  "/",
//   auth(USER_ROLE.ADMIN),
  validateRequest(PurchaseValidation.purchaseValidationSchema),
  PurchaseController.createPurchase
);

router.put(
  "/:id",
  auth(USER_ROLE.ADMIN),
  PurchaseController.updatePurchase
);

router.delete("/:id",  auth(USER_ROLE.ADMIN), auth(USER_ROLE.ADMIN), PurchaseController.deletePurchase);


router.get("/", PurchaseController.getAllPurchases);
router.get("/:id", PurchaseController.getSinglePurchase);

export const PurchaseRoutes = router;
