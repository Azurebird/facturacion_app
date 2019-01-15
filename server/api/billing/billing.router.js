import express from 'express';
import { receivePayment, cancelPayment } from './billing.controller';

const router = express.Router();

router.post('/pay', receivePayment);

router.delete('/cancel', cancelPayment);

module.exports = router;
