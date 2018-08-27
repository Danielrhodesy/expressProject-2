const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.end('about page')
})

router.get('/us', function(req, res){
  res.end('about us')
})

router.get('/product', function(req, res){
  res.end('about the product')
})

module.exports = router;
