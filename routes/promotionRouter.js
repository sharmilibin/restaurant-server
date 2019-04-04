const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promotions = require('../models/promotions');

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/') // route 1
.get((req,res,next) => {
   Promotions.find({})
   .then((promotions) => {
     res.statusCode = 200;
     res.setHeader('Content-Type','application/jason');
     res.json(promotions);
   },(err) => next(err))
   .catch((err) => next(err));
   })

  .post((req,res,next) => {
    Promotions.create(req.body)
    .then((promotions) => {
      console.log('promotions created', promotions);
      res.statusCode = 200;
      res.setHeader('Content-Type','application/jason');
      res.json(promotions);
    },(err) => next(err))
    .catch((err) => next(err));
    })
  
  .put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put not supported');
  })
  .delete((req,res,next) => {
    Promotions.remove({})
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type','application/jason');
      res.json(resp);
    },(err) => next(err))
    .catch((err) => next(err));
  });


  promotionRouter.route('/:promotionId') 
  .get((req,res,next) => {
    Promotions.findById(req.params.promotionId)
    .then((promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotion/'+ req.params.promotionId);
})
.put((req, res, next) => {
    Promotions.findByIdAndUpdate(req.params.promotionId, {
        $set: req.body
    }, { new: true })
    .then((promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotions.findByIdAndRemove(req.params.promotionId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

  module.exports = promotionRouter;
