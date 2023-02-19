import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.mjs';

import catchAsync from '../utils/catchAsync.mjs';
import User from '../models/userModel.mjs';

const createToken = payload => {
  return new Promise(resolve => {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    resolve(token);
  });
};

export const createUser = catchAsync(async (req, res, next) => {
  const { name, password, passwordConfirm } = req.body;

  if (!name || !password || !passwordConfirm) return next(new AppError('Invalid request body provided', 400));

  const user = await User.create({ name, password, passwordConfirm });
  res.status(200).json({ status: 'success', statusCode: 200, message: 'User created' });
});

export const loginUser = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) return next(new AppError('Invalid request body provided', 400));

  const user = await User.findOne({ name }).select('+password');
  if (!user) return next(new AppError('User not found', 404));

  const isPasswordValid = await user.passwordIsValid(password, user.password);
  if (!isPasswordValid) return next(new AppError('Invalid password provided', 401));

  const token = await createToken({ id: user._id });
  res.status(200).json({ status: 'success', statusCode: 200, token });
});

export const checkLogin = catchAsync(async (req, res, next) => {});
