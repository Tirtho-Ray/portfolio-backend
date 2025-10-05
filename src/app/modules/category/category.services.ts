import { Category } from "./category.model";
import AppError from "../../middlewares/appError";
import httpStatus from "http-status";


const createCategoryIntoDB = async (payload: TCategory) => {
  const existing = await Category.findOne({ name: payload.name });
  if (existing) {
    throw new AppError(httpStatus.CONFLICT, "Category already exists!");
  }
  const category = await Category.create(payload);
  return category;
};

// ✅ Get All Categories
const getAllCategoriesFromDB = async () => {
  const categories = await Category.find();
  return categories;
};

// ✅ Get Single Category
const getSingleCategoryFromDB = async (id: string) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found!");
  }
  return category;
};

// ✅ Update Category
const updateCategoryInDB = async (id: string, payload: Partial<TCategory>) => {
  const updated = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!updated) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found!");
  }
  return updated;
};

// ✅ Delete Category
const deleteCategoryFromDB = async (id: string) => {
  const deleted = await Category.findByIdAndDelete(id);
  if (!deleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found!");
  }
  return deleted;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  getSingleCategoryFromDB,
  updateCategoryInDB,
  deleteCategoryFromDB,
};
