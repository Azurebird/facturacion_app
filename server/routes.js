import healthcheck from './api/healthcheck/healthcheck.router';

export default (app) => {
  app.use('/healthcheck', healthcheck);
};
