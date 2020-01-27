import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import conf from './config/conf.json';
import { api } from './routes';
import { log } from './lib';
import { KPSession } from './models';

const app = express();

const options: {
  key: Buffer;
  cert: Buffer;
} = {
  key: fs.readFileSync('/etc/openssl/privateKey.key'),
  cert: fs.readFileSync('/etc/openssl/certificate.crt'),
};

app.use(express.json());
app.use(cors());

app.use('/', api);

app.use('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(404).send(JSON.stringify({
    msg: 'Error 404: Resource not found!',
  }));
});

KPSession.startTimeoutLoop();
https.createServer(options, app).listen(conf.port, conf.hostname, () => log.info(`[API]> Listening on https://${conf.hostname}:${conf.port} ...`));

