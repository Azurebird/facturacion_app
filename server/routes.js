import healthcheck from './api/healthcheck/healthcheck.router';
import billing from './api/billing/billing.router';

export default (app) => {
  app.use('/healthcheck', healthcheck);
  app.use('/billing', billing);
};
