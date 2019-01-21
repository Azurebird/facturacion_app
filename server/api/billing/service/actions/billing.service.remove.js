import Joi from '../../../../config/joi';
import { BadRequest } from '../../../errors/http.errors'; // eslint-disable-line import/named
import billingModel from '../model/billing.model';

const schema = Joi.object().keys({
  billingId: Joi.string().required()
    .error(new BadRequest(
      'Billing Id is required',
    )),
});

/**
 * @param {object} req
 * @param {string} req.userId
 * @param {object} req.client
 */
export default async (req) => {
  try {
    await Joi.validateAsync(req.body, schema);

    const { billingId } = req.body;
    const result = await billingModel.findByIdAndRemove(billingId);
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
