const OrderModel= require("../models/orderModel")
const mongoose=require("mongoose")
const varify=function(ObjectId){
    return mongoose.Types.ObjectId.isValid(ObjectId)
}
const createOrder= async function (req, res) {
    let data= req.body
    if(!varify(data.userId)){
        return res.send("Your userId is not valid")
    }
    if(!varify(data.productId)){
        return res.send("Your ProductId is not valid")
    }
    let savedData= await OrderModel.create(data)
    res.send({msg: savedData})
}

module.exports.createOrder=createOrder
