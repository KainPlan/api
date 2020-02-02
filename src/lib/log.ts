/**
 * @packageDocumentation
 * @module lib/log
 */

import winston from 'winston';
import path from 'path';

/**
 * The winston logger:
 *
 * Error-level logs will be stored in `log/server.log` whereas info-level messages will be logged to the console.
 */
const log = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.resolve(__dirname, '..', 'log', 'server.log'),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      ),
      level: 'error',
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
      level: 'info',
    }),
  ],
});

export default log;