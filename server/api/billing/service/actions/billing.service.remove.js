import Joi from '../../../../config/joi';
import { BadRequest } from '../../../errors/http.errors'; // eslint-disable-line import/named
import billingModel from '../model/billing.model';
import { CreateSuccessResponse, CreateErrorResponse } from '../../../utils/utils.status';

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
    return CreateSuccessResponse(result);
  } catch (e) {
    return CreateErrorResponse(e);
  }
};
