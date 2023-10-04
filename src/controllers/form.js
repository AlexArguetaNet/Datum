const mongoose = require('mongoose');
const mCollection = require('../models/collection');


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