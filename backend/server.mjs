import mongoose from 'mongoose';
import { config } from 'dotenv';

import app from './app.mjs';

//Configure config.env path
config({ path: './config.env' });

//Database Connection
(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Database connection established!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

//Starting Express Server
const port = process.env.PORT || 3000; //3000 is the default port
app.listen(port, () => console.log(`App listening on port ${port}`));
