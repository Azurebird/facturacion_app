import express from 'express';
import config from './config/environment';

const app = express();

app.listen(config.server.port, () => {
  console.log(`Server listening at ${config.server.port}`);
});
