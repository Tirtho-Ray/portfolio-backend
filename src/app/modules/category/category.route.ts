import express from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constsnt';

const router = express.Router();
router.post('/',auth(USER_ROLE.ADMIN),CategoryController.createCategory);

export const CategoryRoutes = router;
