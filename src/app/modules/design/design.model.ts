import { Schema, model } from 'mongoose';
import { TDesign } from './design.interface';

const DesignSchema = new Schema<TDesign>(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    description: { type: String, required: true },
    previewImageUrl: { type: String, required: true },
    designerName: { type: String, required: true },
    usedTools: { type: [String], required: true },
    effectsUsed: { type: [String], required: true },
    price: { type: Number, required: true },
    process: { type: String, required: true },
    complexity: {
      type: String,
      enum: ['Basic', 'Intermediate', 'Advanced'],
      required: true,
    },
    tags: { type: [String], required: true },
    status: {
      type: String,
      enum: ['Active', 'Draft', 'Archived'],
      default: 'Draft',
    },
    likesCount: { type: Number, default: 0 },
    downloadsCount: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true, 
  }
);

export const Design = model<TDesign>('Design', DesignSchema);
