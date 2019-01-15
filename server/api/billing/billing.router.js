import express from 'express';
import billing from './billing.controller';

const router = express.Router();

router.post('/', billing.create);

router.put('/', billing.update);

router.delete('/', billing.remove);

module.exports = router;
