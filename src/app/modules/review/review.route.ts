import express from 'express';
import { ReviewController } from './review.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constsnt';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';

const router = express.Router();


router.post(
  '/',
  auth(USER_ROLE.USER), 
  validateRequest(ReviewValidation.reviewValidationSchema), 
  ReviewController.createReview
);


router.get('/', ReviewController.getAllReviews);


router.get('/:id', ReviewController.getSingleReview);

router.put(
  '/:id',
  auth(USER_ROLE.ADMIN),
  ReviewController.updateReview
);


router.delete('/:id', auth(USER_ROLE.ADMIN), ReviewController.deleteReview);

export const ReviewRouter = router;
