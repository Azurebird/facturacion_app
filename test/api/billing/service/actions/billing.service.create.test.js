import { expect } from 'chai';
import createBill from '../../../../../server/api/billing/service/actions/billing.service.create';

describe('Tests for the billing creation', () => {
  it('[ERROR] When the required parameters are not sent', async () => {
    const req = {
      body: {},
    };
    const response = await createBill(req);
    expect(response).to.not.be.empty;
    expect(response.status).to.be.equals(400);
  });
});
