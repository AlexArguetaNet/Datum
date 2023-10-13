const { Router } = require('express');
const { 
    createCollection, 
    getCollection, 
    createForm, 
    getForm,
    editForm,
    updateForm
 } = require('../controllers/form');

const router = Router();

router.get('/collection/:id', getCollection);
router.get('/edit/:formId', editForm);
router.get('/:userId/:formId', getForm);
router.post('/create-collection', createCollection);
router.post('/create-form', createForm);
router.patch('/update/:formId', updateForm);

module.exports = router;