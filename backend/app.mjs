import express from 'express';
import morgan from 'morgan';

import userRoute from './routes/userRoute.mjs';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/users', userRoute);

export default app;
