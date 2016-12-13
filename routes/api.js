/**
 * Created by xinmac on 16/12/13.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/name',function(req, res) {
    res.json({
        name:"Bob"
    })
})

module.exports = router;