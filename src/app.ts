import cors from 'cors';
import express, { Application,NextFunction,Request,Response } from 'express';
import httpStatus from 'http-status';
import notFound from './app/middlewares/notfound';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app:Application = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//main router 
app.use('/api/v1',router);


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to the API',
  });
});

// this is not found handler 
app.use(globalErrorHandler);
app.use(notFound);

export default app;