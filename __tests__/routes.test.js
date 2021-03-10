const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
require('jest-extended');

const divisions = ['england-and-wales', 'scotland', 'northern-ireland'];
const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];

it('GET on endpoint /', async done => {
  const resp = await request.get('/');
  expect(resp.status).toBeOneOf([200,302]);
  done();
  }
);

it('GET on endpoint /all', async done => {
  const resp = await request.get('/all');
  expect(resp.status).toBeOneOf([200,302]);
  done();
  }
);

// Test for /:division

divisions.forEach(division => {
  it(`GET on endpoint /${division}`, async done => {
    const resp = await request.get(`/${division}`);
    expect(resp.status).toBeOneOf([200,302]);
    done();
    }
  );
});

// Test for /:division/:year

divisions.forEach(division => {
  years.forEach(year => {
    it(`GET on endpoint /${division}/${year}`, async done => {
      const resp = await request.get(`/${division}/${year}`);
      expect(resp.status).toBeOneOf([200,302]);
      done();
      }
    );
  });
});
