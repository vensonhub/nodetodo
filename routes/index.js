var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos',function(req,res,next){
  models.Todo.find({},function(err,docs){
    res.send(docs);
  });
});

router.post('/todos',function(req,res,next){
  var todo = req.body;
  models.Todo.create(todo,function(err,doc){
    res.send(doc);
  })
});

router.post('/deltodos',function(req,res,next){
  var ids = req.body.ids;
  models.Todo.remove({_id:{$in:ids}},function(err,doc){
    res.send({});
  })
});

module.exports = router;
