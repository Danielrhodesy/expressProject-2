const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('home/index',{
    title: 'about Page'
  })
})

router.get('/home', function(req, res){
  res.end('this is coming from the home route')
})

module.exports = router;
