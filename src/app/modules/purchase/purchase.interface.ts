import { Types } from 'mongoose';

export type TPaymentStatus = 'Pending' | 'Paid' | 'Cancelled';

export type TPurchase = {
  customer: Types.ObjectId;
  design: Types.ObjectId;  
  selectedPlan: Types.ObjectId; 
  paymentStatus: TPaymentStatus;
  purchaseDate?: Date;
};
