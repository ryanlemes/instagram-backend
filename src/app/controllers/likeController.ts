import { Context } from 'koa';
import lService from '../services/like';
import { LikeService } from '../services/like/interfaces/likeServiceInterface';

function LikeController(_likeService?: LikeService) {
  const likeService = _likeService || lService();

  const store = async (ctx: Context) => {
    try {
      const { id } = ctx.params;
      const service = await likeService.add(id);
      ctx.status = 200;
      ctx.body = service;
      ctx.io.emit('post', service.data);
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: 'internal error when try to like some post',
      };
    }
  };

  const remove = async (ctx: Context) => {
    try {
      const { id } = ctx.params;
      const service = await likeService.remove(id);
      ctx.status = 200;
      ctx.body = service;
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: 'internal error when try to dislike some post',
      };
    }
  };

  return {
    store,
    remove,
  };
}

export default LikeController;
