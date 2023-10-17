const { Router } = require('express');
const { 
    createCollection, 
    getCollection, 
    createForm, 
    getForm,
    editForm,
    updateForm,
    generatePDF
 } = require('../controllers/form');

const router = Router();

router.get('/collection/:id', getCollection);
router.get('/edit/:formId', editForm);
router.get('/pdf/:formId', generatePDF);
router.get('/:userId/:formId', getForm);
router.post('/create-collection', createCollection);
router.post('/create-form', createForm);
router.put('/update/:formId', updateForm);

module.exports = router;