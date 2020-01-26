import express from 'express';
import bcrypt from 'bcrypt';
import chalk from 'chalk';
import winston from 'winston';
import path from 'path';
import fs from 'fs';
import cv from 'compare-versions';
import https from 'https';
import cors from 'cors';
import conf from './config/conf.json';
import { api } from './routes';
import { log } from './lib';

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

https.createServer(options, app).listen(conf.port, conf.hostname, () => log.info(`[API]> Listening on https://${conf.hostname}:${conf.port} ...`));

