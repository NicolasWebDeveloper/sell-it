import express from 'express';
import morgan from 'morgan';

import errorController from './controllers/errorController.mjs';
import userRoute from './routes/userRoute.mjs';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/users', userRoute);

app.use(errorController);

export default app;
