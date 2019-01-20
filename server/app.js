import bodyParser from 'body-parser';
import express from 'express';
import config from './config/environment';
import startMongo from './config/mongo';
import routes from './routes';

const app = express();
startMongo();
app.use(bodyParser.json());
routes(app);

app.listen(config.server.port, () => {
  console.log(`Server listening at ${config.server.port}`);
});
