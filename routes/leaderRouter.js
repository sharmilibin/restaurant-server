const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/') // route 1
.get((req,res,next) => {
    res.end('Get all Leaders');
  })
  .post((req,res,next) => {
    res.end('New Leader created Of name:  ' +req.body.name+ ' and Detail: '+req.body.description);
  })
  .put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put not supported');
  })
  .delete((req,res,next) => {
    res.end('Deleting all Leaders');
  });


  leaderRouter.route('/:leaderId') 
 .get((req,res,next) => {
    res.end('Get  the Leader with id: ' +req.params.leaderId );
  })
 .post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
  })
  .put((req,res,next) => {
    res.write('Updating leader with ID ' +req.params.leaderId );
    res.end('  Leader Name: '+req.body.name+ ' details: ' +req.body.description);
  })
  .delete((req,res,next) => {
    res.end('deleting leader with ID: ' +req.params.leaderId );
  
  });

  module.exports = leaderRouter;
