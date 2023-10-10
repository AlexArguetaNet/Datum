const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    user_id: {type: String, required: true},
    columns: [{type: String}],
    rows: [{type: String}],
    collection_id: {type: String, required: false},
    favorite: {type: Boolean, required: true}
});

module.exports = mongoose.model('form', formSchema);