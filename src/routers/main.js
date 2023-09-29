const { Router } = require('express');
const { getLandingPage, getAboutPage, getContactUsPage, getLoginPage } = require('../controllers/main');

const router = Router();

router.get('/', getLandingPage);
router.get('/about', getAboutPage);
router.get('/contact-us', getContactUsPage);
router.get('/login', getLoginPage);

module.exports = router;