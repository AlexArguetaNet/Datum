const { Router } = require('express');
const { createCollection, getCollection, createForm } = require('../controllers/form');

const router = Router();

router.get('/collection/:id', getCollection);
router.post('/create-collection', createCollection);
router.post('/create-form', createForm);

module.exports = router;