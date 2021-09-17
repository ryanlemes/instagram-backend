import Koa from 'koa';
import router from '../routes';
import '../configs/database';

const app = new Koa();

app.use(router.routes());

export = app;
