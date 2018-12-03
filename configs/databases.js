const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db=> console.log("conectado con exito"))
.catch(err=> console.log(err));