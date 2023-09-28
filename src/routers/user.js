const { Router } = require('express');
const { createUser, logout } = require('../controllers/user');

const router = Router();

router.post('/create-user', createUser);
router.post('/logout', logout);

module.exports = router;