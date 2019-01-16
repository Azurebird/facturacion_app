import ExtendableError from 'es6-error';

class ServerError extends ExtendableError {
  constructor(message = 'Internal server error') {
    super();
    this.status = 500;
    this.message = message;
  }
}

class BadRequest extends ExtendableError {
  constructor(message = 'Bad request') {
    super();
    this.status = 400;
    this.message = message;
  }
}

module.exports = {
  ServerError,
  BadRequest,
};
