const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    user_id: {type: String, required: true},
    col: {type: Number, required: true},
    row: {type: Number, required: true},
    collection_id: {type: String, required: false},
    favorite: {type: Boolean, required: true}
});

module.exports = mongoose.model('form', formSchema);