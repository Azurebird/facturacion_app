import express from 'express';
import healthController from './healthcheck.controller';

const router = express.Router();

router.get('/', healthController);

module.exports = router;
