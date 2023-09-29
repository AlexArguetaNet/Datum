const { Router } = require('express');
const { createUser, logout, getUserHomePage } = require('../controllers/user');

const router = Router();

router.post('/create-user', createUser);
router.get('/home/:id', getUserHomePage);
router.get('/logout', logout);

module.exports = router;