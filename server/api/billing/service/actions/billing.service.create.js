import Joi from '../../../../config/joi';
import { BadRequest } from '../../../errors/http.errors'; // eslint-disable-line import/named
import billingModel from '../model/billing.model';
import { CreateSuccessResponse, CreateErrorResponse } from '../../../utils/utils.status';

const schema = Joi.object().keys({
  userId: Joi.string().required()
    .error(new BadRequest(
      'userId is required',
    )),
  client: Joi.object().required()
    .error(new BadRequest(
      'client is required',
    )),
  products: [Joi.object()],
});

/**
 * @param {object} req
 * @param {string} req.userId
 * @param {object} req.client
 */
export default async (req) => {
  try {
    await Joi.validateAsync(req.body, schema);

    const result = await billingModel.create(req.body);
    return CreateSuccessResponse(result);
  } catch (e) {
    return CreateErrorResponse(e);
  }
};
