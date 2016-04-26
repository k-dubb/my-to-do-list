var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({

    type    : String,
    url     : String

});

module.exports = mongoose.model('Photo', photoSchema);