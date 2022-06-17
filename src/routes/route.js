const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeapi= require("../controllers/meme")
const weatherapi= require("../controllers/weather")


router.get('/findByDistrict', CowinController.findByDistrict)
router.get('/findwheather', weatherapi.weather)
router.post('/creatememe', memeapi.creatememe)
router.get('/findwheathersort', weatherapi.weathersort)



// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;