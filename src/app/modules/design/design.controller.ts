import AppError from "../../middlewares/appError";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { DesignServices } from "./design.services";
import httpStatus from "http-status";


const createDesign = catchAsync(async (req, res) => {
  const result = await DesignServices.createDesignIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Design created successfully!",
    data: result,
  });
});


const getAllDesigns = catchAsync(async (req, res) => {
  const result = await DesignServices.getAllDesignsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All designs fetched successfully!",
    data: result,
  });
});

const getSingleDesign = catchAsync(async (req, res) => {
  const id = req.params.id;
    if (!id) {
        throw new AppError(httpStatus.BAD_REQUEST, "design ID is required!");
    }
  const result = await DesignServices.getSingleDesignFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Design fetched successfully!",
    data: result,
  });
});


const updateDesign = catchAsync(async (req, res) => {
  const id = req.params.id;
    if (!id) {
          throw new AppError(httpStatus.BAD_REQUEST, "design ID is required!");
      }
  const result = await DesignServices.updateDesignInDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Design updated successfully!",
    data: result,
  });
});


const deleteDesign = catchAsync(async (req, res) => {
  const id = req.params.id;
    if (!id) {
        throw new AppError(httpStatus.BAD_REQUEST, "design ID is required!");
    }
  const result = await DesignServices.deleteDesignFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Design deleted successfully!",
    data: result,
  });
});

export const DesignController = {
  createDesign,
  getAllDesigns,
  getSingleDesign,
  updateDesign,
  deleteDesign,
};
