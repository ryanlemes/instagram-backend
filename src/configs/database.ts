import mongoose from 'mongoose';
import env from './env';

// Mongoose connection
mongoose.connect(env.database.url || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.log(err);
  }
});

export default mongoose;
