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

module.exports = router;
// adding this comment for no reason