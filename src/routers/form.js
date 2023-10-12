const { Router } = require('express');
const { createCollection, getCollection, createForm,getForm } = require('../controllers/form');

const router = Router();

router.get('/:userId/:formId', getForm);
router.get('/collection/:id', getCollection);
router.post('/create-collection', createCollection);
router.post('/create-form', createForm);

module.exports = router;