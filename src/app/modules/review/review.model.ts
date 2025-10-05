import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const ReviewSchema = new Schema<TReview>(
  {
    reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    design: { type: Schema.Types.ObjectId, ref: 'Design', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, 
  }
);

export const Review = model<TReview>('Review', ReviewSchema);
