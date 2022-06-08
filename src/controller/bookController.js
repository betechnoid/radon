const bookModel=require("../Model/bookModel")
const authormodel=require("../Model/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}


module.exports.createBook= createBook