[api](../README.md) › ["server"](_server_.md)

# External module: "server"

## Index

### Variables

* [app](_server_.md#const-app)

### Object literals

* [options](_server_.md#const-options)

## Variables

### `Const` app

• **app**: *Express‹›* = express()

*Defined in [src/server.ts:18](https://github.com/KainPlan/api/blob/3eeae78/src/server.ts#L18)*

The main Express app.

## Object literals

### `Const` options

### ▪ **options**: *object*

*Defined in [src/server.ts:23](https://github.com/KainPlan/api/blob/3eeae78/src/server.ts#L23)*

The TLS-Options; providing both the certificate and the key.

###  cert

• **cert**: *Buffer‹›* = fs.readFileSync(conf.tls.crt)

*Defined in [src/server.ts:28](https://github.com/KainPlan/api/blob/3eeae78/src/server.ts#L28)*

###  key

• **key**: *Buffer‹›* = fs.readFileSync(conf.tls.key)

*Defined in [src/server.ts:27](https://github.com/KainPlan/api/blob/3eeae78/src/server.ts#L27)*
