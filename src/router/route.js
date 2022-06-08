const express = require('express');
const router = express.Router();
const BookController= require("../controller/bookController");
const authorsController= require("../controller/authorsController");

router.post("/createBook", BookController.createBook)

router.post("/createAuthor", authorsController.createAuthor)

router.get("/bookByChetan", authorsController.bookByChetan)

router.post("/twostates",authorsController.twostates)


module.exports=router;