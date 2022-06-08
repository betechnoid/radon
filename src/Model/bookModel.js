const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema( {
    authorId: {type:Number,
    required:true},
    name: String, 
    price: Number,
    ratings:String 
})


module.exports = mongoose.model('id', bookSchema)