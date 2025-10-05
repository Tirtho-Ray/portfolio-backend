// 📁 purchase.validation.ts

import { z } from 'zod';

const objectIdRegex = /^[a-f\d]{24}$/i;

 const purchaseValidationSchema = z.object({
  customer: z.string().regex(objectIdRegex, 'Invalid Customer ID'),
  design: z.string().regex(objectIdRegex, 'Invalid Design ID'),
  selectedPlan: z.string().regex(objectIdRegex, 'Invalid Pricing Plan ID'),
  paymentStatus: z.enum(['Pending', 'Paid', 'Cancelled']).default('Pending'),
});


export const PurchaseValidation ={
purchaseValidationSchema
}