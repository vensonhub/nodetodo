var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2016todo');

exports.Todo = mongoose.model('todo',new mongoose.Schema({name:String}));