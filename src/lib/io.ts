/**
 * @packageDocumentation
 * @module lib/io
 */

import fs from 'fs';
import path from 'path';
import { KPMap } from '../models';
import cv from 'compare-versions';
import OutdatedMapError from '../errors/OutdatedMapError';
import { MapNotFoundError } from '../errors';

/**
 * Will return the absolute path to a given map-name.
 * @param mapName The name of a map.
 * @returns The absolute path.
 */
function getMapPath(mapName: string): string {
  return path.resolve(__dirname, '..',
                      path.normalize(`res/maps/${mapName}.map.json`)
             .replace(/^(\.\.(\/|\\|$))+/, ''));
};

/**
 * Callback for the [[lib/io.readMap|`lib/io.readMap`]] function.
 */
type ReadMapCallback =
/**
 * @param err If an error occurred whilst reading, the callback will receive it here.
 * @param map If the map has been retrieved successfully, the callback will be able to access it here.
 */
(err: Error, map: KPMap) => void;

/**
 * Reads a [[models.KPMap|`KPMap`]] from its `xxx.map.json` file.
 * @param mapName The name of a map.
 * @param cb The callback.
 */
function readMap(mapName: string, cb: ReadMapCallback) {
  readRawMap(mapName, (err, map) => {
    if (err) return cb(err, null);
    try {
      cb(null, KPMap.parse(map));
    } catch (e) {
      cb(e, null);
    }
  })
};

/**
 * Callback for the [[lib/io.readRawMap|`lib/io.readRawMap`]] function.
 */
type ReadRawMapCallback =
/**
 * @param err If an error occurred whilst reading, the callback will receive it here.
 * @param map The retrieved map in raw JSON format.
 */
(err: Error, map: string) => void;

/**
 * Reads the raw JSON representation of a [[models.KPMap|`KPMap`]] from its `xxx.map.json` file.
 * @param mapName The name of a map.
 * @param cb The callback.
 */
function readRawMap(mapName: string, cb: ReadRawMapCallback) {
  const mapPath = getMapPath(mapName);
  if (!fs.existsSync(mapPath)) return cb(new MapNotFoundError(), null);
  fs.readFile(mapPath, (err, data) => {
    if (err) return cb(err, null);
    cb(null, data.toString());
  });
}

/**
 * Callback for the [[lib/io.writeMap|`lib/io.writeMap`]] function.
 */
type WriteMapCallback =
/**
 * @param err If an error occurred whilst reading, the callback will receive it here.
 */
(err: Error) => void;

/**
 * Writes a given map to the `xxx.map.json` file of the given name.
 * @param mapName The name of a map.
 * @param map A KPMap object.
 * @param cb The callback.
 */
function writeMap(mapName: string, map: KPMap, cb: WriteMapCallback) {
  const mapPath = getMapPath(mapName);
  if (!fs.existsSync(mapPath)) return fs.writeFile(mapPath, JSON.stringify(map), cb);
  readMap(mapName, (err, prevMap) => {
    if (cv(prevMap.version, map.version) >= 0) return cb(new OutdatedMapError());
    fs.writeFile(mapPath, JSON.stringify(map), cb);
  });
};

export default { getMapPath, readMap, readRawMap, writeMap, };