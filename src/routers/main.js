const { Router } = require('express');
const { getLandingPage, getLoginPage } = require('../controllers/main');

const router = Router();

router.get('/', getLandingPage);
router.get('/login', getLoginPage);

module.exports = router;