import httpStatus from 'http-status';
import AppError from '../../middlewares/appError';
import { User } from '../user/user.model';
import { TLoginUser, TRegisterUser } from './auth.interface';
import config from '../../config';
import { createToken } from '../../utils/verifyJWT';
import { comparePassword } from '../../utils/bcryptHelper';
import { USER_ROLE, USER_STATUS } from '../user/user.constsnt';

const registerUser = async (payload: TRegisterUser) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, 'User already exists!');
  }


  const newUser = await User.create({
    ...payload,
    role: USER_ROLE.USER,
    status: USER_STATUS.ACTIVE,
  });

  const jwtPayload = {
    _id: newUser._id?.toString() || '',
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    status: newUser.status,
  };


  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    message: 'Registration successful!',
    // user: jwtPayload,
    tokens: { accessToken, refreshToken },
  };
};


const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) throw new AppError(httpStatus.NOT_FOUND, 'User not found!');

  if (user.status === USER_STATUS.BLOCKED) {
    throw new AppError(httpStatus.FORBIDDEN, 'User is blocked!');
  }

  const isMatch = await comparePassword(payload.password, user.password);
  if (!isMatch) throw new AppError(httpStatus.FORBIDDEN, 'Incorrect password!');

  const jwtPayload = {
    _id: user._id?.toString() || '',
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    // user: jwtPayload,
    tokens: { accessToken, refreshToken },
  };
};

export const AuthServices = {
  registerUser,
  loginUser,
};
