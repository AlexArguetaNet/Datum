const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    user_id: {type: String, required: true},
    name: {type: String, required: true},
    size: {type: Number, required: true},
    forms: {type: [String], required: false}
}, { timestamps: true });

module.exports = mongoose.model('collection', collectionSchema);