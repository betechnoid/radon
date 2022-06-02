const express = require('express');
const lodash=require('lodash');

const externalModule = require('../logger/logger.js')
const externalModul = require('../util/helper.js')
const externalModu = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(externalModule.welcome)
    console.log(externalModul.days);
    console.log(externalModul.months);
    console.log(externalModul.topic)
    console.log(externalModu.trimming)
    console.log(externalModu.rupper)
    console.log(externalModu.lower)

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    
let year=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(lodash.chunk(year, 3))
    res.send('My first ever api!')
});

router.get('/candidates', function(req, res){
    let candidates =['Akash', 'suman']
    res.send(candidates)
});

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let n=7;
    let sumof= (n(n+1)/2);
    let missingNumber

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
})


module.exports = router;
// adding this comment for no reason