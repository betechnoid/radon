const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select(  { bookName :1, authorName:1, _id :0}  )
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let data=req.body
    let allBooks= await BookModel.find(data);
    //let allBooks= await BookModel.find({year:"2014"})
    res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
    let allBooks= await BookModel.find({bookName:"rich dad poor dad"})
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({"prices.indianPrice":{$in:["350","450","650"]}}) 
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable:true}]}) //.count()
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getRandomBooks=getRandomBooks