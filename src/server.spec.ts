import app from './server';
import { KPMap } from './models';
import { InvalidMapFormatError } from './errors';
import supertest from 'supertest';

const req = supertest(app);

describe('ANYONE - Tests', () => {
  it("/", async done => {
    const res = await req.get('/');
    expect(res.status).toBe(404);
    expect(res.body.success).not.toBeTruthy();
    done();
  });
  it("/bernd", async done => {
    const res = await req.get('/bernd');
    expect(res.status).toBe(404);
    expect(res.body.success).not.toBeTruthy();
    done();
  });
  it("/map", async done => {
    const res = await req.get('/map');
    expect(res.status).toBe(200);
    expect(res.body.success).toBeTruthy();
    expect(() => KPMap.parse(res.body.map)).not.toThrow(InvalidMapFormatError);
    done();
  });
  it("/maps", async done => {
    const res = await req.get('/maps/1234');
    expect(res.status).toBe(403);
    expect(res.body.success).not.toBeTruthy();
    done();
  });
});