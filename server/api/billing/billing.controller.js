import billingService from './billing.service';

const create = (req, res) => {
  billingService.create();
  res.status(200);
};

const update = (req, res) => {
  billingService.update();
  res.status(200);
};

const remove = (req, res) => {
  billingService.remove();
  res.status(200);
};

module.exports = {
  create,
  update,
  remove,
};
