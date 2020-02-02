import KPBeacon from './KPBeacon';

describe('KPBeacon - Tests', () => {
  it("constructor", done => {
    expect(() => new KPBeacon(20, 20)).not.toThrow();
    done();
  });
});