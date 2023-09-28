const { Router } = require('express');
const { getLandingPage } = require('../controllers/main');

const router = Router();

router.get('/', getLandingPage);

module.exports = router;