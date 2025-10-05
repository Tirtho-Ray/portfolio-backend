import { PricingPlan } from "./price.model";
import { TPricingPlan } from "./price.interface";
import { Types } from "mongoose";
import AppError from "../../middlewares/appError";
import httpStatus from "http-status";

const createPricePlanIntoDB = async (payload: TPricingPlan) => {
  const plan = await PricingPlan.create(payload);
  return plan;
};

const getAllPricePlansFromDB = async () => {
  return PricingPlan.find().lean();
};

const getSinglePricePlanFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid Pricing Plan ID");
  }

  const plan = await PricingPlan.findById(id).lean();
  if (!plan) {
    throw new AppError(httpStatus.NOT_FOUND, "Pricing Plan not found");
  }

  return plan;
};

const updatePricePlanInDB = async (id: string, payload: Partial<TPricingPlan>) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid Pricing Plan ID");
  }

  const updated = await PricingPlan.findByIdAndUpdate(id, payload, { new: true }).lean();
  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Pricing Plan not found");
  }

  return updated;
};

const deletePricePlanFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid Pricing Plan ID");
  }

  const deleted = await PricingPlan.findByIdAndDelete(id).lean();
  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Pricing Plan not found");
  }

  return deleted;
};

export const PriceServices = {
  createPricePlanIntoDB,
  getAllPricePlansFromDB,
  getSinglePricePlanFromDB,
  updatePricePlanInDB,
  deletePricePlanFromDB,
};
