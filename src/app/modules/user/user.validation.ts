// 📁 user.validation.ts
import { z } from "zod";
import { USER_ROLE, USER_STATUS } from "./user.constsnt";

export const userValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum([USER_ROLE.ADMIN, USER_ROLE.USER]),
  status: z.enum([
    USER_STATUS.ACTIVE,
    USER_STATUS.BLOCKED,
    USER_STATUS.PENDING,
  ]),
  profilePicture: z.string().url("Must be a valid URL").optional(), // optional if needed
});

export const UserValidation = {
  userValidationSchema,
};
