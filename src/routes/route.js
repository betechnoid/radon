const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authuser=require("../authentication/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)

router.get("/users/:userId",authuser.auth, userController.getUserData)

router.put("/users/:userId", authuser.auth,userController.updateUser)
// router.delete("/users:userId",authuser.auth, userController.dUser)
module.exports = router;