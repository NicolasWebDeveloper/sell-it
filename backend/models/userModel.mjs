import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator: function (v) {
        return v.length >= 6;
      },
    },
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: 'Passwords do not match!',
    },
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 14);
  this.passwordConfirm = undefined;
  next();
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
