import { Context } from 'koa';
import postService from '../services/post';
import { PostBody, PostService } from '../services/post/interfaces/postServiceInterface';
import Utils from '../../utils';

function PostController(_postService?: PostService) {
  const service = _postService || postService();
  const utils = Utils();

  const index = async (ctx: Context) => {
    try {
      const responseService = await service.findAll();
      ctx.status = 200;
      ctx.body = responseService;
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: 'internal error when try to delete some post',
      };
    }
  };

  const store = async (ctx: Context) => {
    const file = ctx.request.file;
    const {
      author,
      place,
      description,
      hashtags,
    } = ctx.request.body;

    const encodedFile = utils.encode64(file.buffer);
    const body: PostBody = {
      author,
      description,
      hashtags,
      place,
      image: encodedFile,
      likes: 0,
    };

    const responseService = await service.createNew(body);
    ctx.body = responseService;
  };

  const remove = async (ctx: Context) => {
    const { id } = ctx.params;
    try {
      const response = await service.deleteOne(id);
      ctx.status = response.status;
      ctx.body = {
        message: response.message,
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: 'internal error when try to delete some post',
      };
    }
  };

  return {
    index,
    store,
    remove,
  };
}

export default PostController;
