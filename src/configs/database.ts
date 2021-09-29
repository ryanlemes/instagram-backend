import mongoose from 'mongoose';
import env from './env';

// Mongoose connection
mongoose.connect(env.database.url || '', {}, (err) => {
  if (err) {
    console.log(err);
  }
});

export default mongoose;
