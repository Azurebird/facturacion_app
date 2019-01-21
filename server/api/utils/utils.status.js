
const CreateSuccessResponse = (result => ({
  status: 200,
  message: 'OK',
  body: result,
}));

const CreateErrorResponse = (e => ({
  status: e.status,
  message: e.message,
  body: {},
}));


module.exports = {
  CreateSuccessResponse,
  CreateErrorResponse,
};
