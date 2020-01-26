import fs from 'fs';
import express from 'express';
import path from 'path';
import { error, io } from '../lib';

function get_default_map(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile(path.resolve(__dirname, '..', 'res/maps/conf.json'), (err, data) => {
    if (err) return error.e500(err, res);
    const mapConf = JSON.parse(data.toString());
    const cuPath = io.get_map_path(mapConf.current_map);
    if (!fs.existsSync(cuPath)) return error.e500(err, res);
    req.params = { m_name: mapConf.current_map };
    return get_map(req, res);
  });
};

function get_map(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  io.read_map(req.params.m_name, (err, map) => {
    if (err) {
      if (err.message === '404') return error.err_msg(res, 404);
      return error.e500(err, res);
    }
    res.send(`{"success": true, "map": ${JSON.stringify(map)}}`);
  });
};

function get_version(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  io.read_map(req.params.m_name, (err, data) => {
    if (err) {
      if (err.message === '404') return error.err_msg(res, 404);
      return error.e500(err, res);
    }
    res.send(JSON.stringify({
      success: true,
      version: data.version,
    }));
  });
};

export default { get_default_map, get_map, get_version, };