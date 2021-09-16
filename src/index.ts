import app from './app';
import env from './configs/env';

app.listen(env.port);

console.info(`App listening on port ${env.port}`);