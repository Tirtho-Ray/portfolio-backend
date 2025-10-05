import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const required = (value: string | undefined, key: string): string => {
  if (!value) throw new Error(` Missing environment variable: ${key}`);
  return value;
};

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '5000',
  db_url: required(process.env.DB_URL, 'DB_URL'),
  bcrypt_salt_rounds: required(process.env.BCRYPT_SALT_ROUNDS, 'BCRYPT_SALT_ROUNDS'),
  jwt_access_secret: required(process.env.JWT_ACCESS_SECRET, 'JWT_ACCESS_SECRET'),
  jwt_access_expires_in: required(process.env.JWT_ACCESS_EXPIRES_IN, 'JWT_ACCESS_EXPIRES_IN'),
  jwt_refresh_secret: required(process.env.JWT_REFRESH_SECRET, 'JWT_REFRESH_SECRET'),
  jwt_refresh_expires_in: required(process.env.JWT_REFRESH_EXPIRES_IN, 'JWT_REFRESH_EXPIRES_IN'),
};
