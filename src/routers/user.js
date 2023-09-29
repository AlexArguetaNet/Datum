const { Router } = require('express');
const { createUser, login, logout, getUserHomePage } = require('../controllers/user');

const router = Router();

router.post('/create-user', createUser);
router.post('/login', login);
router.get('/home/:id', getUserHomePage);
router.get('/logout', logout);

module.exports = router;