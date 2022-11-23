import app from '../../app';
import { resizeImage } from '../../utils/ResizeImage';
import supertest from 'supertest';

const request = supertest(app);

describe('Test Middleware', () => {
  it('should return an error when width is not a number', async () => {
    const response = await request.get(
      '/api/resizeImage?filename=sphere&width=1f00&height=200'
    );
    expect(response.text).toBe('width and height must be numbers');
  });

  it('should return an error when width is not a number', async () => {
    const response = await request.get(
      '/api/resizeImage?filename=sphere&width=100&height=20d0'
    );
    expect(response.text).toBe('width and height must be numbers');
  });

  it('should return an error when parameter is missing', async () => {
    const response = await request.get('/api/resizeImage');
    expect(response.text).toBe('Missing Parameter(s)');
  });

  it('should return an error when width is not a number', async () => {
    const response = await request.get(
      '/api/resizeImage?filename=imagedoesntexist&width=200&height=300'
    );
    expect(response.text).toBe('image not found');
    expect(response.status).toBe(400);
  });
});

describe('Test image processor function', async () => {
  it('Should not throw an error when resize image is called', async () => {
    expect(async () => {
      await resizeImage('map.png', 100, 100, 'map');
    }).not.toThrow();
  });
});
