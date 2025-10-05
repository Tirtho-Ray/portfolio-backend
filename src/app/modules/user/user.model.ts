import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { USER_ROLE, USER_STATUS } from './user.constsnt';

export interface IUser extends Document {
  name: string;
  email: string;
  mobileNumber?: string;
  password: string;
  role: keyof typeof USER_ROLE;
  status: keyof typeof USER_STATUS;
  isPasswordMatch(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    mobileNumber: { type: String },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: Object.values(USER_ROLE), default: USER_ROLE.USER },
    status: { type: String, enum: Object.values(USER_STATUS), default: USER_STATUS.ACTIVE },
  },
  { timestamps: true }
);


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userSchema.methods.isPasswordMatch = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
