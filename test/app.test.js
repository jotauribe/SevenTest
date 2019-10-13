const axios = require('axios');
const request = require('supertest');
const sinon = require('sinon');
const app = require('../app');

const fakeData = require('./testData');

describe('Api Test', () => {
  let axiosGetStub;

  beforeAll(() => {
    axiosGetStub = sinon.stub(axios, 'post');
  });

  afterAll(() => {
    axiosGetStub.restore();
  });

  it('handle successful response from api', async () => {
    axiosGetStub.returns([fakeData.githubResponse]);

    const server = await app.start();
    const response = await request(server)
      .post('/github_users')
      .send({
        usernames: ['Timer']
      })
      .expect(200);
    await app.stop();

    expect(response).toBe([fakeData.expectedResponse]);
  });
});
