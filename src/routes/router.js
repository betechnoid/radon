const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController");
const ProductController=require("../controllers/productController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
const mid1= function ( req, res, next) {
    head=req.headers.isfreeappuser
    console.log(head)
    if(!head==true||false){
        res.send({msg:"header field is require"})
    }
    console.log("cool your middle ware is working")
    next()
}
router.post("/createUser", mid1 ,UserController.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/createOrder", OrderController.createOrder)

module.exports=router