const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/') // route 1
.get((req,res,next) => {
    res.end('Get all Promotions');
  })
  .post((req,res,next) => {
    res.end('New Promotion created Of name:  ' +req.body.name+ ' and Detail: '+req.body.description);
  })
  .put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put not supported');
  })
  .delete((req,res,next) => {
    res.end('Deleting all Promotions');
  });


  promotionRouter.route('/:promotionId') 
 .get((req,res,next) => {
    res.end('Get  the Promotion with id: ' +req.params.promotionId );
  })
 .post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promotionId);
  })
  .put((req,res,next) => {
    res.write('Updating leader with ID ' +req.params.promotionId );
    res.end('  Promotion Name: '+req.body.name+ ' details: ' +req.body.description);
  })
  .delete((req,res,next) => {
    res.end('deleting promotion with ID: ' +req.params.promotionId );
  
  });

  module.exports = promotionRouter;
