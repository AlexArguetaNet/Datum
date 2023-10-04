const mongoose = require('mongoose');
const mCollection = require('../models/collection');


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