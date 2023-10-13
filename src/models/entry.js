const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    form_id: {type: String, required: true},
    data: {type: [String], required: false}
}, { timestamps: true });

module.exports = mongoose.model('entry', entrySchema);