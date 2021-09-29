import { Schema, model } from 'mongoose';
import { PostDoc } from './interfaces/post';

const PostSchema = new Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: Number,
}, {
  timestamps: true,
});

export = model<PostDoc>('Post', PostSchema);
