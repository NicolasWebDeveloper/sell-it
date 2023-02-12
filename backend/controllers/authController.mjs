import catchAsync from '../utils/catchAsync.mjs';
import User from '../models/userModel.mjs';

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  const user = await User.create({ name, email, password, passwordConfirm });
  console.log(user);
  res.status(200).json({ status: 'success', message: 'User created!' });
});
