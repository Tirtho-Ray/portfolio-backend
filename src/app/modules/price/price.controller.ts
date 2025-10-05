import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import httpStatus from "http-status";
import { PriceServices } from "./price.services";
import AppError from "../../middlewares/appError";

const createPrice = catchAsync(async (req, res) => {
  const result = await PriceServices.createPricePlanIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Pricing plan created successfully!",
    data: result,
  });
});

const getAllPrices = catchAsync(async (req, res) => {
  const result = await PriceServices.getAllPricePlansFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pricing plans retrieved successfully!",
    data: result,
  });
});

const getSinglePrice = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "price ID is required!");
      }
  const result = await PriceServices.getSinglePricePlanFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pricing plan retrieved successfully!",
    data: result,
  });
});

const updatePrice = catchAsync(async (req, res) => {
  const { id } = req.params;
   if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "price ID is required!");
      }
  const result = await PriceServices.updatePricePlanInDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pricing plan updated successfully!",
    data: result,
  });
});

const deletePrice = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "price ID is required!");
      }
  const result = await PriceServices.deletePricePlanFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pricing plan deleted successfully!",
    data: result,
  });
});

export const PriceController = {
  createPrice,
  getAllPrices,
  getSinglePrice,
  updatePrice,
  deletePrice,
};
