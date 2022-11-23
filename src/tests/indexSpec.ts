import supertest from 'supertest';
import App from '../app';

const request = supertest(App);
describe('Testing index.ts', () => {
  it('Should return "Welcome To Image Processing Api"', async () => {
    const response = await request.get('/');
    expect(response.text).toBe('<h1>Welcome To Image Processing Api</h1>');
  });
});
