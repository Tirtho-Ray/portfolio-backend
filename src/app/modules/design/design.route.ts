import express from "express";
import { DesignController } from "./design.controller";
import validateRequest from "../../middlewares/validateRequest";
import { DesignValidation } from "./design.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constsnt";

const router = express.Router();


router.post(
  "/",
  auth(USER_ROLE.ADMIN),
  validateRequest(DesignValidation.designValidationSchema),
  DesignController.createDesign
);


router.get("/", DesignController.getAllDesigns);


router.get("/:id", DesignController.getSingleDesign);


router.put(
  "/:id",
  auth(USER_ROLE.ADMIN),
  DesignController.updateDesign
);


router.delete("/:id", auth(USER_ROLE.ADMIN), DesignController.deleteDesign);

export const DesignRouter = router;
