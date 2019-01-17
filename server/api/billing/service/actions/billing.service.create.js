import Joi from '../../../../config/joi';
import { BadRequest } from '../../../errors/http.errors'; // eslint-disable-line import/named
import billingModel from '../model/billing.model';

const schema = Joi.object().keys({
  userId: Joi.string().required()
    .error(new BadRequest()),
  client: Joi.object().required()
    .error(new BadRequest()),
  products: [Joi.object()],
});

/**
 * @param {object} req
 * @param {string} req.userId
 * @param {object} req.client
 */
export default async (req) => {
  try {
    await Joi.validateAsync(req, schema);

    const result = await billingModel.create(req);
    return {
      status: 200,
      message: 'OK',
      body: result,
    };
  } catch (e) {
    return {
      status: e.status,
      message: e.message,
      body: {},
    };
  }
};
