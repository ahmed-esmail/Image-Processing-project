import express, { Request, Response } from 'express';

import ErrorHandlerMiddleware from './middleware/error-handler.middleware';
import helmet from 'helmet';
import imageRouter from './routes/imageRoutes';

require('dotenv').config();

const App = express();

const PORT = process.env.PORT != null || 3000;
App.listen(PORT, () => {
  console.log(`server Running on port http://localhost:${PORT}`);
});

App.use(express.json());
App.use(helmet());

App.use(imageRouter);

App.use('/', (req: Request, res: Response) => {
  res.send(`<h1>Welcome To Image Processing Api</h1>`);
});

//  for unhandled routes
App.use((request: Request, response: Response) => {
  response.send('Their is no page for this route');
});

App.use(ErrorHandlerMiddleware);

export default App;
