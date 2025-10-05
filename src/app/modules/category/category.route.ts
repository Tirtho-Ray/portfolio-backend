import express from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constsnt';
import validateRequest from './../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';

const router = express.Router();


router.post('/',validateRequest(CategoryValidation.categoryValidationSchema),auth(USER_ROLE.ADMIN), CategoryController.createCategory);
router.get('/',auth(USER_ROLE.ADMIN), CategoryController.getAllCategories);
router.get('/:id',auth(USER_ROLE.ADMIN), CategoryController.getSingleCategory);
router.put('/:id',auth(USER_ROLE.ADMIN), CategoryController.updateCategory);
router.delete('/:id',auth(USER_ROLE.ADMIN), CategoryController.deleteCategory);

export const CategoryRoutes = router;
