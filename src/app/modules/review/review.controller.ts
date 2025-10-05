import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ReviewServices } from './review.services';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponce';
import AppError from '../../middlewares/appError';


const createReview = catchAsync(async (req: Request, res: Response) => {
 
  const reviewerId = req.user?._id;

  
  const reviewData = {
    ...req.body,
    reviewer: reviewerId, 
  };

  const result = await ReviewServices.createReviewIntoDB(reviewData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Review created successfully!",
    data: result,
  });
});

const getAllReviews = catchAsync(async (_req: Request, res: Response) => {
  const result = await ReviewServices.getAllReviewsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviews retrieved successfully!',
    data: result,
  });
});

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Review ID is required!');
  }

  const result = await ReviewServices.getSingleReviewFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Review retrieved successfully!',
    data: result,
  });
});

const updateReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Review ID is required!');
  }

  const result = await ReviewServices.updateReviewByAdmin(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Review updated successfully!',
    data: result,
  });
});

const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Review ID is required!');
  }

  const result = await ReviewServices.deleteReviewByAdmin(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Review deleted successfully!',
    data: result,
  });
});

export const ReviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
