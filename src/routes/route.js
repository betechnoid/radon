const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
router.get("/getBooksInYear", BookController.getBooksInYear)


router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;