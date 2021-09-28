import Router from '@koa/router';
import multer from '@koa/multer';

import StatusController from '../app/controllers/statusController';
import PostController from '../app/controllers/postController';
import LikeController from '../app/controllers/likeController';

const router = new Router();
const upload = multer();

const status = StatusController();
const post = PostController();
const like = LikeController();

router.get('/health', status.health);
router.get('/posts', post.index);
router.post('/posts', upload.single('image'), post.store);
router.delete('/posts/:id', post.remove);

router.post('/posts/:id/like', like.store);
router.post('/posts/:id/dislike', like.remove);

export default router;
