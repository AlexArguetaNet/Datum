const { Router } = require('express');
const { createCollection, getCollection } = require('../controllers/form');

const router = Router();

router.get('/collection/:id', getCollection);
router.post('/create-collection', createCollection);

module.exports = router;