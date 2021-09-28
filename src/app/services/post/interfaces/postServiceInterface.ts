export interface ServiceResponse {
  status: number,
  message?: string,
  data?: any,
}

export interface PostBody {
  author: string,
  place: string,
  description: string,
  hashtags: string,
  image: string,
  likes: number,
}

export interface PostService {
  findOne: () => Promise<ServiceResponse>;
  findAll: () => Promise<ServiceResponse>;
  createNew: () => Promise<ServiceResponse>;
  updateOne: () => Promise<ServiceResponse>;
  deleteOne: () => Promise<ServiceResponse>;
}
