import Joi from '../../../../config/joi';
import { BadRequest } from '../../../errors/http.errors'; // eslint-disable-line import/named
import { CreateErrorResponse, CreateSuccessResponse } from '../../../utils/utils.status';
import billingModel from '../model/billing.model';
import { errors } from '../../../errors/errors.messages';

const schema = Joi.object().keys({
  userId: Joi.string().required()
    .error(new BadRequest(
      errors.userId.message,
    )),
  client: Joi.object().required()
    .error(new BadRequest(
      errors.client.message,
    )),
  products: [Joi.object()],
});

/**
 * @param {object} req
 * @param {string} req.userId
 * @param {object} req.client
 */
export default async function create(req) {
  try {
    await Joi.validateAsync(req.body, schema);

    const result = await billingModel.create(req.body);
    return CreateSuccessResponse(result);
  } catch (e) {
    return CreateErrorResponse(e);
  }
}
