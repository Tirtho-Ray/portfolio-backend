import { Design } from "./design.model";
import { Review } from "../review/review.model";
import { Types } from "mongoose";
import AppError from "../../middlewares/appError";
import httpStatus from "http-status";
import { TDesign } from "./design.interface";

const createDesignIntoDB = async (payload: TDesign) => {
  const design = await Design.create(payload);
  return design;
};


const getAllDesignsFromDB = async () => {
  return Design.find()
    .populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name email" },
    })
    .lean();
};

// Single design with reviews
const getSingleDesignFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid design ID");
  }

  const design = await Design.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name email" },
    })
    .lean();

  if (!design) {
    throw new AppError(httpStatus.NOT_FOUND, "Design not found");
  }

  return design;
};

const updateDesignInDB = async (id: string, payload: TDesign) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid design ID");
  }

  const updated = await Design.findByIdAndUpdate(id, payload, { new: true })
    .populate({
      path: "reviews",
      populate: { path: "reviewer", select: "name email" },
    })
    .lean();

  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Design not found");
  }

  return updated;
};

const deleteDesignFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid design ID");
  }

  const deleted = await Design.findByIdAndDelete(id).lean();
  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Design not found");
  }

  await Review.deleteMany({ design: id });

  return deleted;
};

export const DesignServices = {
  createDesignIntoDB,
  getAllDesignsFromDB,
  getSingleDesignFromDB,
  updateDesignInDB,
  deleteDesignFromDB,
};
