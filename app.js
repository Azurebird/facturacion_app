import express from 'express';
import config from './config/environment';
import routes from './server/routes';

const app = express();
routes(app);

app.listen(config.server.port, () => {
  console.log(`Server listening at ${config.server.port}`);
});
