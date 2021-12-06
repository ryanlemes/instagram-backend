import app from './app';
import env from './configs/env';

const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

io.listen(8000);

console.info(`App listening on port ${env.port}`);
