import { Purchase } from "./purchase.model";
import { TPurchase } from "./purchase.interface";
import { Types } from "mongoose";
import AppError from "../../middlewares/appError";
import httpStatus from "http-status";

const createPurchaseIntoDB = async (payload: TPurchase) => {
  const purchase = await Purchase.create(payload);
  return purchase;
};

const getAllPurchasesFromDB = async () => {
  return Purchase.find()
    .populate("customer", "name email")
    .populate("design", "title price")
    .populate("selectedPlan", "name price duration")
    .lean();
};

const getSinglePurchaseFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid purchase ID");
  }

  const purchase = await Purchase.findById(id)
    .populate("customer", "name email")
    .populate("design", "title price")
    .populate("selectedPlan", "name price duration")
    .lean();

  if (!purchase) {
    throw new AppError(httpStatus.NOT_FOUND, "Purchase not found");
  }

  return purchase;
};

const updatePurchaseInDB = async (id: string, payload: Partial<TPurchase>) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid purchase ID");
  }

  const updated = await Purchase.findByIdAndUpdate(id, payload, { new: true })
    .populate("customer", "name email")
    .populate("design", "title price")
    .populate("selectedPlan", "name price duration")
    .lean();

  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Purchase not found");
  }

  return updated;
};

const deletePurchaseFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid purchase ID");
  }

  const deleted = await Purchase.findByIdAndDelete(id).lean();

  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Purchase not found");
  }

  return deleted;
};

export const PurchaseServices = {
  createPurchaseIntoDB,
  getAllPurchasesFromDB,
  getSinglePurchaseFromDB,
  updatePurchaseInDB,
  deletePurchaseFromDB,
};
