import { Model } from "mongoose";
import { USER_ROLE, USER_STATUS } from "./user.constsnt";

export type TUser  = {
    name:string;
    email:string;
    password:string;
    role:keyof typeof USER_ROLE;
    status:keyof typeof USER_STATUS;
    profilePicture:string;
}

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>;
  getUserWithPasswordByEmail(email: string): Promise<TUser | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
