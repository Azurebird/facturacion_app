import express from 'express';
import billing from './billing.controller';

const router = express.Router();

router.post('/', billing.create);

router.update('/', billing.update);

router.remove('/', billing.remove);

module.exports = router;
