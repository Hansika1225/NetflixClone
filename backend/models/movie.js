const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    imageURL:{
         type : String,
         required : true
    },
    name:{
        type : String,
        required : true
    },
    genre:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    rating:{
        type  : Number,
        required : true,
        min : 0,
        max : 5
    } ,
},{
    timestamps : true
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;