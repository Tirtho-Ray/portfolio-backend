import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { AuthServices } from './auth.services';


const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUser(req.body);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: result.message,
    // user: result.user,
    tokens: result.tokens,
  });
});


const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: 'Login successful!',

    tokens: result.tokens,
  });
});

export const AuthController = {
  register,
  login,
};
