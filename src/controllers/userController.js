const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data=req.body
    let savedData= await userModel.create(data)
    console.log(savedData)
    res.send(savedData)
}

module.exports.createUser=createUser