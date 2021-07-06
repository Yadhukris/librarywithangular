const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    imageUrl: String
   
});

var Bookdata = mongoose.model('bookdata',NewBookSchema);

module.exports = Bookdata;