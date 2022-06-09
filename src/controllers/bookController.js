const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const mongoose=require('mongoose')

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({authorCreated})
}

const createPublisher= async function (req, res) {
    publisher=req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({publisherCreated})
}

const varify=function(ObjectId){
    return mongoose.Types.ObjectId.isValid(ObjectId)
}
const createBook = async function (req, res) {
    let book=req.body
    if(!book.author_id){return res.send("please enter you author_id")}
    if(!varify(book.author_id)){
        return res.send("your author Object Id is not valid")
    }
    if(!book.publisher){return res.send("please enter you publisher")}
    if(!varify(book.publisher)){
        return res.send("your publisher Object Id is not valid")
    }
    let createbook=await bookModel.create(book)
    res.send({createbook})
}

const getBook = async function (req, res) {
    let specificBook = await bookModel.find().populate([("author_id"),("publisher")])
    res.send({specificBook})
}

module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.getBook=getBook