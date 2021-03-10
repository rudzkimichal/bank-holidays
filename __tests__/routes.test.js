const app = require('../app/routes');
const supertest = require('supertest');
const request = supertest(app);

it('GET on endpoint /', async done => {
  await request.get('/');
  expect(resp.status).toBe(200);
  done();
  }
);
