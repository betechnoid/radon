const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
    required:true}, 
    authorName: String, 
    tags: [String],
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{type:String
        },
    totalPages: Number,
    stockAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
