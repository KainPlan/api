import fs from 'fs';
import path from 'path';
import { KPMap } from '../models';
import cv from 'compare-versions';
import OutdatedMapError from '../errors/OutdatedMapError';

function getMapPath(mapName: string): string {
  return path.resolve(__dirname, '..',
                      path.normalize(`res/maps/${mapName}.map.json`)
             .replace(/^(\.\.(\/|\\|$))+/, ''));
};

type ReadMapCallback = (err: Error, map: KPMap) => void;
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

type ReadRawMapCallback = (err: Error, map: string) => void;
function readRawMap(mapName: string, cb: ReadRawMapCallback) {
  const mapPath = getMapPath(mapName);
  if (!fs.existsSync(mapPath)) return cb(new Error('404'), null);
  fs.readFile(mapPath, (err, data) => {
    if (err) return cb(err, null);
    cb(null, data.toString());
  });
}

type WriteMapCallback = (err: Error) => void;
function writeMap(mapName: string, map: KPMap, cb: WriteMapCallback) {
  const mapPath = getMapPath(mapName);
  if (!fs.existsSync(mapPath)) return fs.writeFile(mapPath, JSON.stringify(map), cb);
  readMap(mapName, (err, prevMap) => {
    if (cv(prevMap.version, map.version) >= 0) return cb(new OutdatedMapError());
    fs.writeFile(mapPath, JSON.stringify(map), cb);
  });
};

export default { getMapPath, readMap, readRawMap, writeMap, };