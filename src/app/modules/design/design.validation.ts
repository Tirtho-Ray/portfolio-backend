// 📁 design.validation.ts

import { z } from 'zod';

 const designValidationSchema = z.object({
  title: z.string().min(2).max(100),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(10),
  previewImageUrl: z.string().url(),
  designerName: z.string().min(2),
  usedTools: z.array(z.string()).min(1),
  effectsUsed: z.array(z.string()).optional(),
  price: z.number().nonnegative(),
  process: z.string().min(5),
  complexity: z.enum(['Basic', 'Intermediate', 'Advanced']),
  tags: z.array(z.string()).optional(),
  status: z.enum(['Active', 'Draft', 'Archived']).default('Draft'),
  likesCount: z.number().optional(),
  downloadsCount: z.number().optional(),
});
export const DesignValidation ={
  designValidationSchema
}

