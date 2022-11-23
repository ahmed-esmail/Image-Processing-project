import express from 'express';
import { processImage } from '../controllers/processImage';
import validateParams from '../middleware/validate-request.middleware';
import { cachedPaths } from '../utils/ImageChecks';
import { ViewCachedPics } from '../controllers/ViewCachedPics';

const imageRouter = express.Router();

imageRouter.get('/api/resizeImage', validateParams, processImage);
imageRouter.get('/api/cache', cachedPaths);
imageRouter.get('/api/cache/:fileName', ViewCachedPics);

export default imageRouter;
