import postService from '../post';
import { PostService, ServiceResponse } from '../post/interfaces/postServiceInterface';

function LikeService(_postService?: PostService) {
  const service = _postService || postService();

  /**
   * Add a new like to post
   * @param id string that contains the post id
   * @returns a status if the post was liked or not
   */
  const add = async (id: string): Promise<ServiceResponse> => {
    const post = await service.findOne(id);
    const likes = post?.likes + 1;
    const newPost: any = {
      likes,
    };
    await service.updateOne(id, newPost);

    return {
      status: 200,
      message: `post ${id} was liked`,
      data: undefined,
    };
  };

  /**
   * remove a like from some post
   * @param id string that contains the post id
   * @returns a status if the post was disliked or not
   */
  const remove = async (id: string): Promise<ServiceResponse> => {
    const post = await service.findOne(id);

    if (post?.likes > 0) {
      const likes = post?.likes - 1;
      const newPost: any = {
        likes,
      };
      await service.updateOne(id, newPost);
    }

    return {
      status: 200,
      message: `post ${id} was liked`,
      data: undefined,
    };
  };

  return {
    add,
    remove,
  };
}

export default LikeService;
