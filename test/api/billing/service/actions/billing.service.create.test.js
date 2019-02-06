import { expect } from 'chai';
import createBill from '../../../../../server/api/billing/service/actions/billing.service.create';
import errors from '../../../../../server/api/errors/errors.messages';

describe('Tests for the billing creation', () => {
  it('[ERROR] When the userId is missing', async () => {
    const req = {
      body: {
        client: {},
      },
    };
    const response = await createBill(req);
    expect(response).to.not.be.empty;
    expect(response.status).to.be.equals(400);
    expect(response.message).to.be.equals(errors.userId.message);
  });

  it('[ERROR] When the client is missing', async () => {
    const req = {
      body: {
        userId: 'userId',
      },
    };
    const response = await createBill(req);
    expect(response).to.not.be.empty;
    expect(response.status).to.be.equals(400);
    expect(response.message).to.be.equals(errors.client.message);
  });
});
