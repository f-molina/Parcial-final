const mongoose = require('mongoose');
const Schema = mongoose;

const  imanSchema = new Schema({
    forma: {type: String, required: true},
    color: {type: String, required: true},
    intensidad: {type: Number, require: true}
});

module.exports = mongoose.model('imanes', imanSchema);