var express = require('express');
var router = express.Router();
var api = require('./api')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get("/partials/:name",function(req,res){
    var name =req.params.name
    res.render('partials/'+name)
})

router.get("/*",function (req,res) {
   res.render('index',{title:'Index'})
})

//router.get('/api/name',api.name)

module.exports = router;
