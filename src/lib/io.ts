import fs from 'fs';
import path from 'path';
import { KPMap } from '../models';

function get_map_path(mapName: string): string {
  return path.resolve(__dirname, '..',
                      path.normalize(`res/maps/${mapName}.map.json`)
             .replace(/^(\.\.(\/|\\|$))+/, ''));
};

type ReadMapCallback = (err: Error, data: KPMap) => void;
function read_map(mapName: string, cb: ReadMapCallback) {
  const mapPath = get_map_path(mapName);
  if (!fs.existsSync(mapPath)) return cb(new Error('404'), null);
  fs.readFile(mapPath, (err, data) => {
    if (err) cb(err, null);
    const pData = JSON.parse(data.toString());
    cb(null, new KPMap(pData.version));
  });
};

type WriteMapCallback = (err: Error) => void;
function write_map(mapName: string, map: KPMap, cb: WriteMapCallback) {
  const mapPath = get_map_path(mapName);
  fs.writeFile(mapPath, JSON.stringify(map), cb);
};

export default { get_map_path, read_map, write_map, };