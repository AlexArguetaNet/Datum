const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: {type: String, required: true},
    user_id: {type: String, required: true},
    columns: [{type: String}],
    entries: {type: [Object], required: false},
    collection_id: {type: String, required: false},
    favorite: {type: Boolean, required: true}
});

module.exports = mongoose.model('form', formSchema);