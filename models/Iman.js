const mongoose = require('mongoose');
const {Schema} = mongoose;

const  imanSchema = new Schema({
    c1: {type: String, required: true},
    c2: {type: String, required: true},
    c3: {type: Number, required: true}
});

module.exports = mongoose.model('imanes', imanSchema);