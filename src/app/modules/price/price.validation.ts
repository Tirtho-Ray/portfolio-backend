import { z } from 'zod';

const pricingPlanValidationSchema = z.object({
  name: z.enum(['Basic', 'Standard', 'Premium']),
  price: z.number().min(0, 'Price must be a positive number'),
  features: z.array(z.string()).min(1, 'At least one feature required'),
  duration: z.string().min(2, 'Duration is required'),
});

export const PriceValidation ={
    pricingPlanValidationSchema
}
