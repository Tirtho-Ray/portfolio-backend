import { Review } from './review.model';
import { TReview } from './review.interface';
import { Types } from 'mongoose';
import { Design } from '../design/design.model';

const createReviewIntoDB = async (reviewData: any) => {

  const review = await Review.create(reviewData);


  await Design.findByIdAndUpdate(review.design, {
    $push: { reviews: review._id },
  });

  return review;
};

const getAllReviewsFromDB = async () => {
    const review =Review.find().populate('reviewer design');
  return review;
};

const getSingleReviewFromDB = async (id: string) => {
    const review = Review.findById(id).populate('reviewer design');
  return review;
};

const updateReviewByAdmin = async (id: string, updateData: Partial<TReview>) => {
   const review = Review.findByIdAndUpdate(id, updateData, { new: true });
    return review
};

const deleteReviewByAdmin = async (id: string) => {
    const review = Review.findByIdAndDelete(id);
  return review
};

export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewByAdmin,
  deleteReviewByAdmin,
};
