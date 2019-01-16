import Joi from 'joi';
import billingModel from '../model/billing.model';

const schema = Joi.object().keys({
  userId: Joi.string().required(),
  client: Joi.string().required(),
  products: [Joi.object()],
});

export default async (req) => {
  Joi.validate(req, schema);

  const result = await billingModel.create({ userId: '1', client: {} });
  return result;
};
