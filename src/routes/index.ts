import Router from 'koa-router';
import StatusController from '../app/controllers/statusController';

const router = new Router();

const status = StatusController();

router.get('/health', status.health);

export default router;