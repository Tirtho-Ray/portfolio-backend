import { Schema, model } from 'mongoose';
import { TPurchase } from './purchase.interface';

const PurchaseSchema = new Schema<TPurchase>(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    design: { type: Schema.Types.ObjectId, ref: 'Design', required: true },
    selectedPlan: {
      type: Schema.Types.ObjectId,
      ref: 'PricingPlan',
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Cancelled'],
      default: 'Pending',
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Purchase = model<TPurchase>('Purchase', PurchaseSchema);
