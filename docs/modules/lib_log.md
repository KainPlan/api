[api](../README.md) › [lib/log](lib_log.md)

# External module: lib/log

## Index

### Variables

* [log](lib_log.md#const-log)

## Variables

### `Const` log

• **log**: *Logger‹›* = winston.createLogger({
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
})

*Defined in [src/lib/log.ts:14](https://github.com/KainPlan/api/blob/5225f70/src/lib/log.ts#L14)*

The winston logger:

Error-level logs will be stored in `log/server.log` whereas info-level messages will be logged to the console.
