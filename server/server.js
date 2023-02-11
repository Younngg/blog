import next from 'next';
import { parse } from 'url';
import { createServer } from 'http';
import postRouter from './routes/postRouter.js';
import express from 'express';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

let isDisableKeepAlive = false;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use((_, res, next) => {
    if (isDisableKeepAlive) {
      res.set('Connection', 'close');
    }
    next();
  });

  server.use('/api', postRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    console.log(`> ✨Ready on http://localhost:${port}`);
  });
});
