import config from '../config/config.mjs';

const handleDuplicationError = () => {
  return { status: 'fail', statusCode: 400, message: 'Name is already taken' };
};

export default (err, req, res, next) => {
  let error = { ...err };
  error.statusCode = error.statusCode || 500;
  if (config.inProduction) {
    //App is running in Production Mode. - Prevent Data - Leaking
    if (error.code === 11000) error = handleDuplicationError();

    res.status(error.statusCode).json(error);
  } else {
    console.error('ERROR! 🔥🔥🔥🔥🔥');
    res.json(err);
    console.log(err);
    console.table(err);
  }
};
