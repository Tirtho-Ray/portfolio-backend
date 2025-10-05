

import { Schema, model } from 'mongoose';
import { TPricingPlan } from './price.interface';

const PricingPlanSchema = new Schema<TPricingPlan>(
  {
    name: {
      type: String,
      enum: ['Basic', 'Standard', 'Premium'],
      required: true,
      unique: true,
    },
    price: { type: Number, required: true, min: 0 },
    features: { type: [String], required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);
 
export const PricingPlan = model<TPricingPlan>('PricingPlan', PricingPlanSchema);
