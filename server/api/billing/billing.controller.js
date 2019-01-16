import billingService from './billing.service';

const create = async (req, res) => {
  const response = await billingService.create(req);
  res.status(200).json(response);
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
