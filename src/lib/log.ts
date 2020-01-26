import winston from 'winston';
import path from 'path';

export default winston.createLogger({
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