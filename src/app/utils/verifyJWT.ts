import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import AppError from '../middlewares/appError';

export interface MyJwtPayload extends JwtPayload {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const createToken = (
  jwtPayload: MyJwtPayload,
  secret: string,
  expiresIn: string
) => {
  const options: SignOptions = { expiresIn:expiresIn as any };
  return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (token: string, secret: string): MyJwtPayload => {
  try {
    return jwt.verify(token, secret) as MyJwtPayload;
  } catch {
    throw new AppError(401, 'Invalid or expired token');
  }
};
