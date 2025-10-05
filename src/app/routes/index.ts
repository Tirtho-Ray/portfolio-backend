import express from 'express';
import { UserRouter } from '../modules/user/user.router';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { DesignRouter } from '../modules/design/design.route';
import { ReviewRouter } from '../modules/review/review.route';
import { PriceRoutes } from '../modules/price/price.route';
import { PurchaseRoutes } from '../modules/purchase/purchase.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/designs',
    route: DesignRouter,
  },
  {
    path: '/reviews',
    route: ReviewRouter,
  },
  {
    path: '/pricing',
    route: PriceRoutes,
  },
  {
    path: '/purchases',
    route: PurchaseRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
