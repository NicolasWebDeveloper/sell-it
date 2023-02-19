import config from '../config/config.mjs';
import AppError from '../utils/appError.mjs';

const handleDuplicationError = () => {
  return new AppError('Name is already taken!', 400);
};

const handleValidationError = err => {
  const errors = Object.keys(err.errors).join(' ');
  return new AppError(`Input validation failed. Please fix the following fields: ${errors}`, 400);
};

export default (err, req, res, next) => {
  let error = { ...err };
  console.log(err);
  error.statusCode = error.statusCode || 500;
  if (config.inProduction) {
    //App is running in Production Mode. - Prevent Data - Leaking
    if (error.code === 11000) error = handleDuplicationError();
    if (error._message === 'user validation failed') error = handleValidationError(err);

    res.status(error.statusCode).json(error);
  } else {
    console.error('ERROR! 🔥🔥🔥🔥🔥');
    res.json(err);
    console.log(err);
    console.table(err);
  }
};
