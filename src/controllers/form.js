const mongoose = require('mongoose');
const mCollection = require('../models/collection');
const Form = require('../models/form');
const Entry = require('../models/entry');
const User = require('../models/user');


// GET: Get a collection
exports.getCollection = (req, res, next) => {

    mCollection.findById(req.params.id)
    .then((data) => {
        res.render('form/collection', { collection: data });
    })
    .catch((err) => {
        res.json({msg: err});
    });

}

// POST: Create a new collection
exports.createCollection = (req, res, next) => {

    const userId = req.session.user._id;
    const name = req.body.name;

    const newCollection = {
        user_id: userId,
        name: name,
        size: 0,
        forms: []
    }

    mCollection.create(newCollection)
    .then(() => {
        console.log('Collection created');
        res.redirect('/');
    })
    .catch((err) => {
        res.json({msg:err});
    });

}


// POST: Create a new form
exports.createForm = (req, res, next) => {

    const { name, columns } = req.body;

    const newForm = {
        name: name,
        user_id: req.session.user._id,
        columns: columns,
        rows: [],
        favorite: false
    }

    Form.create(newForm)
    .then(() => {
        res.redirect('/');
    })
    .catch((err) => {
        res.json({msg:err});
    });

}

// GET: Get a form
exports.getForm = (req, res, next) => {

    const { userId, formId } = req.params;

    try {

        Form.findById({ _id: formId })
        .then((data) => {
            res.render('form/form', { form: data, loggedIn: true });
        });

    } catch(e) {
        res.json({msg:e});
    }

}

// GET: Get the page to edit a form
exports.editForm = async (req, res, next) => {

    const { formId } = req.params;

    try {

        Form.findById({ _id: formId })
        .then((data) => {
            res.render('form/editForm', { form: data, loggedIn: true });
        });

    } catch(e) {
        res.json({msg:e});
    }

}

// POST: Update a form
// TODO: Address case where an exisitng 
// entry needs to be updates
exports.updateForm = async (req, res, next) => {

    const { formId } = req.params;

    // Save entries to the database and store the Ids
    for (const entry in req.body) {
        
        var newEntry = {
            form_id: formId,
            data: req.body[entry]
        }

        // Wait for entries to be created and stored
        // in the database
        await Entry.create(newEntry);

    }

    // Get entry Ids from the database
    const entries = await Entry.find({ form_id: formId });
    
    Form.findByIdAndUpdate({ _id: formId}, { entries: entries })
    .then(() => {
        res.redirect('/');
    })
    .catch((err) => {
        res.json({ msg: err });
    });

}
