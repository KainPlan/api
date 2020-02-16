/**
 * @packageDocumentation
 * @module controllers/maps
 */

import fs from 'fs';
import express from 'express';
import path from 'path';
import { error, io } from '../lib';
import { KPMap } from '../models';
import { InvalidMapFormatError, MapNotFoundError, OutdatedMapError } from '../errors';

/**
 * **`<ANYONE>`**
 *
 * Controller for `GET::/map` --> will respond with the default map (as defined in `res/maps/conf.json`).
 * @param req The Express Request
 * @param res The Express Response
 */
function getDefaultMap(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile(path.resolve(__dirname, '..', 'res/maps/conf.json'), (errRead, data) => {
    if (errRead) return error.e500(errRead, res);
    const mapConf = JSON.parse(data.toString());
    const cuPath = io.getMapPath(mapConf.current_map);
    if (!fs.existsSync(cuPath)) return error.e500(new MapNotFoundError(), res);
    req.params = { m_name: mapConf.current_map };
    return getMap(req, res);
  });
}

/**
 * **`<LOGGED-IN>`**
 *
 * Controller for `GET::/map/:m_name/:token` --> will respond with the map the user asked for.
 * @param req The Express Request
 * @param res The Express Response
 */
function getMap(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  io.readRawMap(req.params.m_name, (errRead, map) => {
    if (errRead) {
      if (errRead instanceof MapNotFoundError) return error.errMsg(res, 404);
      return error.e500(errRead, res);
    }
    res.send(`{"success": true, "map": ${map}}`);
  });
}

/**
 * **`<ADMIN>`**
 *
 * Controller for `PUT::/map/:m_name/:token` --> will override the old content with the new map given.
 * @param req The Express Request
 * @param res The Express Response
 */
function putMap(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  try {
    const map: KPMap = KPMap.parse(req.body);
    io.writeMap(req.params.m_name, map, err => {
      if (err instanceof OutdatedMapError) return error.errMsg(res, 400, { msg: err.message });
      else if (err) return error.e500(err, res);
      res.status(200).send(`{"success": true, "msg": "Map has been saved!"}`);
    });
  } catch (e) {
    if (!(e instanceof InvalidMapFormatError)) return error.e500(e, res);
    error.errMsg(res, 400, { msg: e.message, });
  }
}

/**
 * **`<LOGGED-IN>`**
 *
 * Controller for `GET::/maps/:token` --> responds with all maps (`xxx.map.json` files in `res/maps`) and a timestamp of when they were last edited.
 * @param req The Express Request
 * @param res The Express Response
 */
function getMaps(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  fs.readdir(path.resolve(__dirname, '..', 'res', 'maps'), (errLs, files) => {
    if (errLs) return error.e500(errLs, res);
    const maps: {
      name: string;
      timestamp: number;
    }[] = files.filter(f => f.match(/^.+\.map\.json$/))
                    .map(f => {
                        return {
                            name: f.replace(/\.map\.json$/, ''),
                            timestamp: fs.statSync(path.resolve(__dirname, '..', 'res', 'maps', f)).mtimeMs,
                        }
                    });
    res.status(200).send(JSON.stringify({
      success: true,
      maps,
    }));
  });
}

/**
 * **`<LOGGED-IN>`**
 *
 * Controller for `GET::/version/:m_name/:token` --> will respond with the version of the map queried for.
 * @param req The Express Request
 * @param res The Express Response
 */
function getVersion(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  io.readMap(req.params.m_name, (errRead, data) => {
    if (errRead) {
      if (errRead.message === '404') return error.errMsg(res, 404);
      return error.e500(errRead, res);
    }
    res.send(JSON.stringify({
      success: true,
      version: data.version,
    }));
  });
}

export default {
  getDefaultMap,
  getMap,
  putMap,
  getMaps,
  getVersion,
};