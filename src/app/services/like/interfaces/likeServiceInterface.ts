import { ServiceResponse } from '../../post/interfaces/postServiceInterface';

export interface LikeService {
  add: () => Promise<ServiceResponse>;
  remove: () => Promise<ServiceResponse>;
}
