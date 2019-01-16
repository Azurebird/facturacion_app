import Joi from 'joi';
import Promise from 'bluebird';

export default Promise.promisifyAll(Joi);
