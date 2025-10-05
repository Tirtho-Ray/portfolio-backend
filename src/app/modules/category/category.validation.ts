import { z } from "zod";


const categoryValidationSchema = z.object({
  name: z
    .string()
    .nonempty("Category name is required")
    .min(3, "Category name must be at least 3 characters")
    .max(200, "Category name cannot exceed 200 characters")
    .trim(), 
  description: z
    .string()
    .nonempty("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters")
    .trim(),
});

export const CategoryValidation = {
  categoryValidationSchema,
};
