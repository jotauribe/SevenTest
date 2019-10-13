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

    const response = await request(app)
      .post('/github_users')
      .send({
        usernames: ['Timer']
      })
      .expect(200);

    expect(response).toBe([fakeData.expectedResponse]);
  });
});
