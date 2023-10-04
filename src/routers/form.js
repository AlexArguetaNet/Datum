const { Router } = require('express');
const { createCollection } = require('../controllers/form');

const router = Router();

router.post('/create-collection/', createCollection);

module.exports = router;