import express from "express";
import { PriceController } from "./price.controller";
import validateRequest from "../../middlewares/validateRequest";
import { PriceValidation } from "./price.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constsnt";

const router = express.Router();


router.post(
  "/",
  auth(USER_ROLE.ADMIN),
  validateRequest(PriceValidation.pricingPlanValidationSchema),
  PriceController.createPrice
);

router.get("/", PriceController.getAllPrices);

router.get("/:id", PriceController.getSinglePrice);

router.put(
  "/:id",
  auth(USER_ROLE.ADMIN),
  PriceController.updatePrice
);


router.delete("/:id", auth(USER_ROLE.ADMIN), PriceController.deletePrice);
export const PriceRoutes = router;
