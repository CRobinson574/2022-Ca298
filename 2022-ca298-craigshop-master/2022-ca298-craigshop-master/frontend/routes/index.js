var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  res.render('login')
});

router.get('/home', function(req, res, next){
  res.render('home')
});

router.get('/basket', function(req, res, next){
  res.render('basket')
});

router.get('/checkout', function(req, res, next){
  res.render('checkout')
});

router.get('/order', function(req, res, next){
  res.render('order')
});

router.get('/productindividual', function(req, res, next){
  res.render('productindividual')
});


module.exports = router;
