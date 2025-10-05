import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import config from '../config';

import { catchAsync } from '../utils/catchAsync';
import { verifyToken } from '../utils/verifyJWT';
import AppError from './appError';
import { USER_ROLE } from '../modules/user/user.constsnt';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

 
    const decoded = verifyToken(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { role, email } = decoded;

   
    const user = await User.findOne({ email }).select('email role status').lean();

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
    }

   
    if (user.status === 'BLOCKED') {
      throw new AppError(httpStatus.FORBIDDEN, 'User is blocked!');
    }

  
    if (requiredRoles.length && !requiredRoles.includes(user.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    req.user = decoded;
    next();
  });
};

export default auth;
