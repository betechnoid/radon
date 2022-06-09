const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")



router.post("/createAuthor", bookController.createAuthor  )

router.post("/createPublisher", bookController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBook", bookController.getBook)



module.exports = router;