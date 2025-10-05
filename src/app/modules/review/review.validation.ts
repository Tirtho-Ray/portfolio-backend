import { z } from 'zod';

 const reviewValidationSchema = z.object({
  design: z.string().min(1, 'Design is required'),    
  rating: z.number().min(1).max(5),
  comment: z.string().min(1, 'Comment is required'),
});

export const ReviewValidation ={
    reviewValidationSchema
}
