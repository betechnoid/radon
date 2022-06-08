const authormodel=require("../Model/authorModel")
const bookModel=require("../Model/bookModel")
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authormodel.create(data)
    res.send({msg: savedData})
}

const bookByChetan= async function (req, res) {
    let data= req.body
    let mainid= await authormodel.find({authorName:"Chetan Bhagat"}).select({authorId:1,_id:0})
    let book=await bookModel.find({authorId:mainid[0].authorId},)
    // console.log(Id)
    res.send({msg:book})
}
const twostates= async function (req, res) {
    let data= req.body
    let allbooks=await bookModel.findOneAndUpdate({name:"Two States"},{$set:{data}},{new:true,upsert:true}).select({authorId:1,name:1,price:1,_id:0})
    author=await authormodel.find({authorId:allbooks.authorId}) //.select({authorName:1,_id:0})
    res.send({msg:author,allbooks})
}

const bitween= function(req, res){ 
    let price=bookModel.find({price:{$gte:50,$lte:100}}).select({ authorId :1})
}






module.exports.twostates=twostates
module.exports.bookByChetan=bookByChetan
module.exports.createAuthor=createAuthor