import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import httpStatus from "http-status";
import { PurchaseServices } from "./purchase.services";
import AppError from "../../middlewares/appError";

const createPurchase = catchAsync(async (req: Request, res: Response) => {
  const result = await PurchaseServices.createPurchaseIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Purchase created successfully!",
    data: result,
  });
});


const getAllPurchases = catchAsync(async (_req: Request, res: Response) => {
  const result = await PurchaseServices.getAllPurchasesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Purchases retrieved successfully!",
    data: result,
  });
});


const getSinglePurchase = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
   if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "Purchase ID is required!");
      }
  const result = await PurchaseServices.getSinglePurchaseFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Purchase retrieved successfully!",
    data: result,
  });
});


const updatePurchase = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
   if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "Purchase ID is required!");
      }
  const result = await PurchaseServices.updatePurchaseInDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Purchase updated successfully!",
    data: result,
  });
});


const deletePurchase = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
   if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "Purchase ID is required!");
      }
  const result = await PurchaseServices.deletePurchaseFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Purchase deleted successfully!",
    data: result,
  });
});

export const PurchaseController = {
  createPurchase,
  getAllPurchases,
  getSinglePurchase,
  updatePurchase,
  deletePurchase,
};
