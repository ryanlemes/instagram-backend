import { Document } from 'mongoose';

export interface PostDoc extends Document{
  author: string,
  place: string,
  description: string,
  hashtags: string,
  image: string,
  likes: number
}
