var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({

    user_id       : Number,
    text          : String

});

module.exports = mongoose.model('Todo', todoSchema);